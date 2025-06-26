import React from 'react'

export default function Footer() {
    return (
        <footer className="text-white py-12" style={{ backgroundColor: '#0f4260' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <img src="/Logo-Fogec.png" alt="" className='w-36 h-auto mb-3' />
                        <p className="text-gray-300">
                            Fonds de Garantie de l'Entrepreneuriat au Congo
                        </p>
                        <p className="text-gray-300 mt-2">
                            Plateforme de création et soumission de projets structurés
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a
                                    href="#connexion"
                                    className="transition-colors duration-200 text-gray-300 underline hover:text-[#eed020]"
                                >
                                    Se connecter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-gray-300">
                            Pour toute question, contactez le FOGEC
                        </p>
                        <p className="text-gray-300 mt-2">
                            Site officiel : <a href="https://fogec.rmb-place.com" target="_blank" rel="noopener noreferrer" className="text-[#eed020] hover:text-[#eed020] hover:underline duration-500">fogec.rmb-place.com</a>
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-[#0f4260] mt-8 pt-8 text-center text-gray-400">
                    <p className='text-sm italic'>&copy; {new Date().getFullYear()} FOGEC - Tous droits réservés</p>
                    <p className='italic font-mono'>Business Plan powered by <a href="https://quantumvertex.cd" target="_blank" rel="noopener noreferrer" className="text-[#eed020] hover:text-[#eed020] hover:underline duration-500">
                        Quantum Vertex SA</a>.
                    </p>
                </div>
            </div>
        </footer>
    )
}
