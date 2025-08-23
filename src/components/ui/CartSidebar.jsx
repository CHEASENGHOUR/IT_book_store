import React from 'react';

function CartSidebar({ Open, Close }) {
    return (
        <div className={`fixed inset-0 z-40 ${Open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
                    Open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={Close}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
                    Open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                    <button 
                        onClick={Close} 
                        className="text-2xl text-gray-600 hover:text-gray-800 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                    >
                        ×
                    </button>
                </div>

                {/* Cart Items */}
                <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                            <div>
                                <span className="block font-medium text-gray-800">Wireless Headphones</span>
                                <span className="text-sm text-gray-500">Qty: 1</span>
                            </div>
                        </div>
                        <span className="font-semibold text-gray-800">$129.99</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
                            <div>
                                <span className="block font-medium text-gray-800">Smart Watch</span>
                                <span className="text-sm text-gray-500">Qty: 1</span>
                            </div>
                        </div>
                        <span className="font-semibold text-gray-800">$299.99</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg"></div>
                            <div>
                                <span className="block font-medium text-gray-800">USB Cable</span>
                                <span className="text-sm text-gray-500">Qty: 2</span>
                            </div>
                        </div>
                        <span className="font-semibold text-gray-800">$24.99</span>
                    </div>
                    
                    {/* Total */}
                    <div className="pt-4 mt-6 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-800">Total:</span>
                            <span className="text-xl font-bold text-gray-900">$454.97</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-[1.02] shadow-lg">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartSidebar;
