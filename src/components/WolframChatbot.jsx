// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     faPaperPlane, 
//     faRobot, 
//     faUser, 
//     faMicrochip 
// } from '@fortawesome/free-solid-svg-icons';

// const WolframChatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const messagesEndRef = useRef(null);

//     // Wolfram Alpha Configuration
//     const WOLFRAM_APP_ID = 'PVUHJQ-QQ8LJ5V6YL';

//     // Initial welcome message
//     useEffect(() => {
//         setMessages([
//             {
//                 text: "Hi there! I'm an AI assistant powered by Wolfram Alpha. Ask me anything from math problems to scientific queries!",
//                 sender: 'bot'
//             }
//         ]);
//     }, []);

//     // Scroll to bottom of messages
//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     // Send message to Wolfram Alpha
//     const sendMessage = async () => {
//         if (!input.trim()) return;

//         // Add user message
//         const userMessage = { text: input, sender: 'user' };
//         setMessages(prev => [...prev, userMessage]);
//         setInput('');
//         setIsLoading(true);

//         try {
//             const response = await axios.get('https://api.wolframalpha.com/v2/query', {
//                 params: {
//                     input: input,
//                     appid: WOLFRAM_APP_ID,
//                     format: 'plaintext',
//                     output: 'JSON'
//                 }
//             });

//             // Process Wolfram Alpha response
//             const parseResponse = (data) => {
//                 // Extract first text result
//                 const pods = data.queryresult.pods;
//                 const primaryPod = pods.find(pod => 
//                     pod.title === 'Result' || 
//                     pod.title === 'Numerical result' || 
//                     pod.title === 'Decimal approximation'
//                 );

//                 if (primaryPod && primaryPod.subpods && primaryPod.subpods[0]) {
//                     return primaryPod.subpods[0].plaintext || 'I found some information, but couldn\'t parse it precisely.';
//                 }

//                 // Fallback to first text result
//                 const firstTextPod = pods.find(pod => pod.subpods && pod.subpods[0].plaintext);
//                 return firstTextPod 
//                     ? firstTextPod.subpods[0].plaintext 
//                     : 'I couldn\'t find a clear answer to your query.';
//             };

//             const botResponse = parseResponse(response.data);
            
//             setMessages(prev => [
//                 ...prev, 
//                 { text: botResponse, sender: 'bot' }
//             ]);
//         } catch (error) {
//             console.error('Wolfram Alpha API Error:', error);
//             setMessages(prev => [
//                 ...prev, 
//                 { 
//                     text: 'Sorry, I encountered an error processing your request. Please try again.', 
//                     sender: 'bot' 
//                 }
//             ]);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Handle Enter key press
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             sendMessage();
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
//             <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
//                 {/* Chatbot Header */}
//                 <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
//                     <div className="flex items-center">
//                         <FontAwesomeIcon icon={faMicrochip} className="text-3xl mr-4" />
//                         <div>
//                             <h2 className="text-2xl font-bold">Wolfram Alpha AI Assistant</h2>
//                             <p className="text-sm opacity-75">Powered by advanced computational knowledge</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Messages Container */}
//                 <div 
//                     className="h-[500px] overflow-y-auto p-6 space-y-4"
//                     style={{ 
//                         backgroundImage: 'linear-gradient(to bottom, rgba(247, 250, 252, 0.5), rgba(237, 242, 247, 0.5))',
//                         backgroundBlendMode: 'overlay'
//                     }}
//                 >
//                     {messages.map((msg, index) => (
//                         <div 
//                             key={index} 
//                             className={`flex items-start space-x-3 ${
//                                 msg.sender === 'user' ? 'justify-end' : 'justify-start'
//                             }`}
//                         >
//                             {msg.sender === 'bot' && (
//                                 <div className="bg-purple-100 rounded-full p-2">
//                                     <FontAwesomeIcon icon={faRobot} className="text-purple-600" />
//                                 </div>
//                             )}
//                             <div 
//                                 className={`
//                                     max-w-[75%] 
//                                     p-3 
//                                     rounded-2xl 
//                                     ${msg.sender === 'user' 
//                                         ? 'bg-purple-600 text-white' 
//                                         : 'bg-gray-100 text-gray-800'
//                                     }
//                                 `}
//                             >
//                                 <ReactMarkdown>{msg.text}</ReactMarkdown>
//                             </div>
//                             {msg.sender === 'user' && (
//                                 <div className="bg-blue-100 rounded-full p-2">
//                                     <FontAwesomeIcon icon={faUser} className="text-blue-600" />
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     {isLoading && (
//                         <div className="text-center text-gray-500">
//                             Thinking...
//                         </div>
//                     )}
//                     <div ref={messagesEndRef} />
//                 </div>

//                 {/* Input Area */}
//                 <div className="p-6 bg-gray-50 border-t">
//                     <div className="flex items-center space-x-4">
//                         <input 
//                             type="text"
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={handleKeyPress}
//                             placeholder="Ask me anything..."
//                             className="
//                                 flex-grow 
//                                 p-3 
//                                 bg-white 
//                                 border 
//                                 border-gray-300 
//                                 rounded-full 
//                                 focus:outline-none 
//                                 focus:ring-2 
//                                 focus:ring-purple-500
//                             "
//                         />
//                         <button 
//                             onClick={sendMessage}
//                             disabled={isLoading}
//                             className="
//                                 bg-purple-600 
//                                 text-white 
//                                 p-3 
//                                 rounded-full  hover:bg-purple-700 
//                                 transition
//                             "
//                         >
//                             <FontAwesomeIcon icon={faPaperPlane} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WolframChatbot;

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaperPlane, 
    faRobot, 
    faUser, 
    faHeartPulse,
    faStethoscope,  // Use faStethoscope instead of faMedicalKit
    faHospital      // Alternative icon
} from '@fortawesome/free-solid-svg-icons';

const HealthcareChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Comprehensive Healthcare Knowledge Base
    const healthcareResponses = {
        mentalHealth: {
            keywords: ['depression', 'anxiety', 'stress', 'mental health'],
            responses: [
                "Mental health is crucial. If you're experiencing persistent symptoms, consider speaking with a professional.",
                "Symptoms of depression can include prolonged sadness, loss of interest, changes in sleep or appetite.",
                "Anxiety management techniques include deep breathing, meditation, and professional counseling."
            ]
        },
        generalHealth: {
            keywords: ['health', 'wellness', 'nutrition', 'exercise'],
            responses: [
                "Maintaining a balanced diet and regular exercise is key to overall health.",
                "Aim for at least 150 minutes of moderate exercise per week.",
                "A balanced diet should include fruits, vegetables, whole grains, and lean proteins."
            ]
        },
        symptoms: {
            keywords: ['symptoms', 'sick', 'feeling', 'pain'],
            responses: [
                "Always consult a healthcare professional for accurate diagnosis.",
                "Persistent symptoms lasting more than a week should be evaluated by a doctor.",
                "Keep track of your symptoms, including their duration and intensity."
            ]
        },
        emergencies: {
            keywords: ['emergency', 'urgent', 'serious', 'help'],
            responses: [
                "If you're experiencing a medical emergency, call emergency services immediately.",
                "Symptoms like chest pain, severe breathing difficulties, or sudden weakness require immediate medical attention.",
                "Your safety is paramount. When in doubt, seek professional medical help."
            ]
        }
    };

    // Categorize and generate healthcare responses
    const generateHealthResponse = (query) => {
        const lowercaseQuery = query.toLowerCase();

        // Check for specific category
        for (const [category, data] of Object.entries(healthcareResponses)) {
            if (data.keywords.some(keyword => lowercaseQuery.includes(keyword))) {
                return data.responses[Math.floor(Math.random() * data.responses.length)];
            }
        }

        // Default responses
        const defaultResponses = [
            "I can help with general health inquiries. What would you like to know?",
            "Health information can be complex. For specific medical advice, always consult a healthcare professional.",
            "I'm here to provide general health guidance. Remember, I'm not a substitute for professional medical advice."
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    };

    // Initial welcome message
    useEffect(() => {
        setMessages([
            {
                text: "Welcome to your Health Assistant! I can provide general health information and guidance. Remember, I'm not a substitute for professional medical advice.",
                sender: 'bot'
            }
        ]);
    }, []);

    // Scroll to bottom of messages
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Send message 
    const sendMessage = async () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Generate health response
            const botResponse = generateHealthResponse(input);
            
            // Simulate response delay
            await new Promise(resolve => setTimeout(resolve, 800));

            setMessages(prev => [
                ...prev, 
                { text: botResponse, sender: 'bot' }
            ]);
        } catch (error) {
            console.error('Response Generation Error:', error);
            setMessages(prev => [
                ...prev, 
                { 
                    text: 'Sorry, I encountered an error processing your request. Please try again.', 
                    sender: 'bot' 
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Chatbot Header */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faStethoscope} className="text-3xl mr-4" />
                        <div>
                            <h2 className="text-2xl font-bold">Health Assistant</h2>
                            <p className="text-sm opacity-75">Your personal health information guide</p>
                        </div>
                    </div>
                </div>

                {/* Messages Container */}
                <div 
                    className="h-[500px] overflow-y-auto p-6 space-y-4"
                    style={{ 
                        backgroundImage: 'linear-gradient(to bottom, rgba(240, 255, 240, 0.5), rgba(230, 250, 230, 0.5))',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`flex items-start space-x-3 ${
                                msg.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            {msg.sender === 'bot' && (
                                <div className="bg-green-100 rounded-full p-2">
                                    <FontAwesomeIcon icon={faHeartPulse} className="text-green-600" />
                                </div>
                            )}
                            <div 
                                className={`
                                    max-w-[75%] 
                                    p-3 
                                    rounded-2xl 
                                    ${msg.sender === 'user' 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-blue-50 text-gray-800'
                                    }
                                `}
                            >
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                            {msg.sender === 'user' && (
                                <div className="bg-blue-100 rounded-full p-2">
                                    <FontAwesomeIcon icon={faUser} className="text-blue-600" />
                                </div>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="text-center text-gray-500">
                            Analyzing your query...
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-6 bg-gray-50 border- t">
                    <div className="flex items-center space-x-4">
                        <input 
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me about health..."
                            className="
                                flex-grow 
                                p-3 
                                bg-white 
                                border 
                                border-gray-300 
                                rounded-full 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-green-500
                            "
                        />
                        <button 
                            onClick={sendMessage}
                            disabled={isLoading}
                            className="
                                bg-green-600 
                                text-white 
                                p-3 
                                rounded-full hover:bg-green-700 
                                transition
                            "
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthcareChatbot;