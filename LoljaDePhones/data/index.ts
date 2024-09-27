import { Category } from "../types/category";
import { Product } from "../types/product";


type Data = {
    categories: Category[],
    products: Product[]
};
export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Samsunga',
            cover: 'https://s.zst.com.br/cms-assets/2023/08/celular-samsung-1.webp'
        },
        {
            id: 2,
            title: 'Motorolo',
            cover: 'https://www.mobilebit.com.br/wp-content/uploads/2024/06/mao-segurando-o-motorola-moto-g14-na-cor-grafite.webp'
        },
        {
            id: 3,
            title: 'Xiaumi',
            cover: 'https://img.olx.com.br/images/88/885477170361388.jpg'
        },
        {
            id: 4,
            title: 'Opple',
            cover: 'https://www.transmedia.cl/wp-content/uploads/2020/07/appleiphone11promaxgreennight.jpg'
        }
    ],
    products: [
        { id: 1, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F519155%2FSmartphone-Samsung-Galaxy-A05-4G-128GB-4GB-RAM-C-mera-50MP-Tela-6-7-Preto_1725977114_g.jpg&w=640&q=100", title: "Samsung Galaxy A05", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 638.90 },

        { id: 2, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F523513%2FCelular-Samsung-Galaxy-A15-8GB-RAM-SSD-256GB-Tela-Infinita-De-6-5-Azul-Escuro_1721399026_g.jpg&w=640&q=100", title: "Samsung Galaxy A15", description: "Proteção UV, design moderno, armação leve.", price: 836.99 },

        { id: 3, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F578382%2FUsado-Galaxy-A12-64gb-Vermelho-Muito-Bom-Trocafone_1714482873_g.jpg&w=640&q=100", title: "Galaxy A12 64gb Vermelho", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 450.65 },

        { id: 4, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F519064%2Fsmartphone-samsung-galaxy-a15-5g-128gb-4gb-octa-core-camera-tripla-50mp-tela-de-6-5-azul-claro-sm-a156mlbrzto_1709148678_g.jpg&w=640&q=100", title: "Samsung Galaxy S23", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 5, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F422463%2FSmartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-12GB-RAM-Octa-Core-C-mera-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Preto_1721308269_g.jpg&w=640&q=100", title: "Samsung Galaxy S23", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 6, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F543770%2FCelular-Samsung-Galaxy-M15-5G-128GB-4GB-RAM-C-mera-Tripla-50MP-6-000mAh-Azul-Escuro_1722972559_g.jpg&w=640&q=100", title: "Celular Samsung Galaxy M15 5G", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 7, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F514076%2FSmartphone-Samsung-Galaxy-S23-Fe-5g-128GB-8GB-RAM-Octa-core-C-mera-Tripla-50MP-12-10-Tela-Infinita-6-4-Verde_1726235878_g.jpg&w=640&q=100", title: "Samsung Galaxy S23 Fe", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 8, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F422461%2FSmartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-128GB-RAM-Snapdragon-8-C-mera-Qu-drupla-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Creme_1723139723_g.jpg&w=640&q=100", title: "Samsung Galaxy S23 Ultra", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 9, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F564821%2FUsado-Samsung-Galaxy-Z-Fold-5-512gb-Preto-Excelente-Trocafone_1713536383_g.jpg&w=640&q=100", title: "Galaxy Z Fold", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },
        
        { id: 10, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fmagalu%2F496413%2FSmartphone-Samsung-Galaxy-S23-256GB-Preto-5G-8GB-RAM-6-1-C-m-Tripla-Selfie-12MP_1695909404_g.jpg&w=640&q=100", title: "Samsung Galaxy S23", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },
        
        
    ]
}