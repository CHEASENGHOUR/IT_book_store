import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ShowBook() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:5000/books");
                setData(res.data.books)
                console.log(res.data.books);

            } catch (e) {
                console.log(e);

            }
        }
        fetchApi();
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                📚 Book Collection
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((book) => (
                    <div
                        key={book.id}
                        className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                    >
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {book.name}
                            </h2>
                            <p className="text-gray-600 mb-4">💰 Price: ${book.price}</p>
                        </div>

                        <a
                            href={`http://127.0.0.1:5000/uploads/${book.pdf}`}
                            download
                            className="inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            ⬇️ Download PDF
                        </a>    
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowBook