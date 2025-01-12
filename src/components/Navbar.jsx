import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faBars, faTimes, faWallet } from '@fortawesome/free-solid-svg-icons';
import { ethers } from 'ethers';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Wallet Connection Function
    const connectWallet = async () => {
        setIsConnecting(true);
        try {
            // Check if MetaMask is installed
            if (window.ethereum) {
                // Request account access
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });

                // Set the first account
                setWalletAddress(accounts[0]);

                // Optional: Switch to Polygon Mumbai Testnet
                await switchToPolygonMumbai();
            } else {
                alert('Please install MetaMask to connect wallet!');
            }
        } catch (error) {
            console.error('Wallet connection error:', error);
            alert('Failed to connect wallet. Please try again.');
        } finally {
            setIsConnecting(false);
        }
    };

    // Switch to Polygon Mumbai Testnet
    const switchToPolygonMumbai = async () => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x13881' }], // Chain ID for Mumbai Testnet
            });
        } catch (switchError) {
            // If the chain is not added, add it
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0x13881',
                            chainName: 'Mumbai Testnet',
                            nativeCurrency: {
                                name: 'MATIC',
                                symbol: 'MATIC',
                                decimals: 18
                            },
                            rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                            blockExplorerUrls: ['https://mumbai.polygonscan.com/']
                        }]
                    });
                } catch (addError) {
                    console.error('Error adding Mumbai chain:', addError);
                }
            }
        }
    };

    // Disconnect Wallet
    const disconnectWallet = () => {
        setWalletAddress('');
    };

    // Listen for account changes
    useEffect(() => {
        const handleAccountsChanged = (accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
            } else {
                setWalletAddress('');
            }
        };

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);

            // Cleanup listener
            return () => {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            };
        }
    }, []);

    // Format wallet address for display
    const formatWalletAddress = (address) => {
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };

    return (
        <header className="bg-white/90 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img 
        src="https://assets.zenn.com/strapi_assets/therapy_logo_a19e507b79.png" 
        alt="Health3 Logo" 
        className="w-10 h-10 mr-2" 
    />
                    <Link to="/" className="text-2xl font-bold text-gray-800">Health3</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-gray-600 hover:text-purple-600 focus:outline-none"
                    >
                        <FontAwesomeIcon 
                            icon={isMenuOpen ? faTimes : faBars} 
                            className="text-2xl"
                        />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link>
                    <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About Us</Link>
                    <Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</Link>
                    <Link to="/resources" className="text-gray-600 hover:text-purple-600 transition-colors">Resources</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact Us</Link>
                    <Link to="/wolfram" className="text-gray-600 hover:text-purple-600 transition-colors">Wolfram AI</Link>

                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex space-x-4 items-center">
                    {walletAddress ? (
                        <div className="flex items-center space-x-3">
                            <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full flex items-center">
                                <FontAwesomeIcon icon={faWallet} className="mr-2" />
                                {formatWalletAddress(walletAddress)}
                            </div>
                            <button 
                                onClick={disconnectWallet} 
                                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-full"
                            >
                                Disconnect
                            </button>
                        </div>
                    ) : (
                        <>
                            <button 
                                onClick={connectWallet}
                                disabled={isConnecting}
                                className={`
                                    px-4 py-2 
                                    border border-purple-300 
                                    rounded-full 
                                    text-purple-600 
                                    hover:bg-purple-50 
                                    transition-colors
                                    ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                            >
                                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                            </button>
                            {/* <Link 
                                to="/signin" 
                                className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link 
                                to="/signup" 
                                className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-transform hover:scale-105"
                            >
                                Sign Up
                            </Link> */}
                        </>
                    )}
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                        <nav className="flex flex-col p-4 space-y-3">
                            {/* ... existing mobile menu items ... */}
                            
                            <div className="flex flex-col space-y-3 pt-4 border-t">
                                {walletAddress ? (
                                 <div className="flex items-center justify-between">
                                        <div className="text-gray-600">
                                            {formatWalletAddress(walletAddress)}
                                        </div>
                                        <button 
                                            onClick={disconnectWallet} 
                                            className="text-red-600 hover:bg-red-50 rounded-full px-4 py-2"
                                        >
                                            Disconnect
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <button 
                                            onClick={connectWallet}
                                            disabled={isConnecting}
                                            className={`
                                                text-center px-4 py-2 
                                                border border-purple-300 
                                                text-purple-600 rounded-full 
                                                ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}
                                            `}
                                        >
                                            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                                        </button>
                                        <Link 
                                            to="/signin" 
                                            onClick={closeMenu}
                                            className="text-center px-4 py-2 text-gray-600"
                                        >
                                            Sign In
                                        </Link>
                                        <Link 
                                            to="/signup" 
                                            onClick={closeMenu}
                                            className="text-center px-4 py-2 bg-purple-600 text-white rounded-full"
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;