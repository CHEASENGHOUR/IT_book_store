import React, { useState } from 'react'

function CartSidebar({ Open, Close }) {

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-in-out ${Open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={Close}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-80 bg-fuchsia-300 shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${Open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-bold">Your Cart</h2>
                    <button onClick={Close} className="text-xl">×</button>
                </div>

                {/* Cart Items */}
                <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
                    <div className="flex items-center justify-between">
                        <span>Product 1</span>
                        <span className="font-semibold">$20</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Product 2</span>
                        <span className="font-semibold">$15</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Product 3</span>
                        <span className="font-semibold">$30</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t">
                    <button className="w-full bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartSidebar