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

        { id: 4, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F519064%2Fsmartphone-samsung-galaxy-a15-5g-128gb-4gb-octa-core-camera-tripla-50mp-tela-de-6-5-azul-claro-sm-a156mlbrzto_1709148678_g.jpg&w=640&q=100", title: "Samsung Galaxy S23", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 1970 },

        { id: 5, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F422463%2FSmartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-12GB-RAM-Octa-Core-C-mera-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Preto_1721308269_g.jpg&w=640&q=100", title: "Samsung Galaxy S23", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2540 },

        { id: 6, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F543770%2FCelular-Samsung-Galaxy-M15-5G-128GB-4GB-RAM-C-mera-Tripla-50MP-6-000mAh-Azul-Escuro_1722972559_g.jpg&w=640&q=100", title: "Celular Samsung Galaxy M15 5G", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 724 },

        { id: 7, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F514076%2FSmartphone-Samsung-Galaxy-S23-Fe-5g-128GB-8GB-RAM-Octa-core-C-mera-Tripla-50MP-12-10-Tela-Infinita-6-4-Verde_1726235878_g.jpg&w=640&q=100", title: "Samsung Galaxy S23 Fe", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2677 },

        { id: 8, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F422461%2FSmartphone-Samsung-Galaxy-S23-Ultra-5G-256GB-128GB-RAM-Snapdragon-8-C-mera-Qu-drupla-200MP-Selfie-12MP-Tela-6-8-Caneta-S-Pen-Creme_1723139723_g.jpg&w=640&q=100", title: "Samsung Galaxy S23 Ultra", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 1994 },

        { id: 9, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F564821%2FUsado-Samsung-Galaxy-Z-Fold-5-512gb-Preto-Excelente-Trocafone_1713536383_g.jpg&w=640&q=100", title: "Galaxy Z Fold", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2340 },
        
        { id: 10, idCategory: 1, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fmagalu%2F496413%2FSmartphone-Samsung-Galaxy-S23-256GB-Preto-5G-8GB-RAM-6-1-C-m-Tripla-Selfie-12MP_1695909404_g.jpg&w=640&q=100", title: "Samsung Galaxy S23", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 1830 },
        
        

        { id: 11, idCategory: 2, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F586261%2FSmartphone-Motorola-Moto-G04s-8GB-RAM-128GB-C-mera-50MP-Tela-6-6-Grafite_1726598953_g.jpg&w=640&q=100", title: "Motorola Moto G04s", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 12, idCategory: 2, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F499197%2FSmartphone-Motorola-Moto-G54-5G-8GB-RAM-SSD-256GB-C-mera-50MP-Selfie-16MP-Tela-6-5-Azul_1724074841_g.jpg&w=1080&q=75", title: "Motorola Moto G54", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 13, idCategory: 2, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F429414%2Fsmartphone-motorola-moto-g53-5g-128gb-4gb-ram-octa-core-camera-dupla-50mp-tela-de-6-5-rose-pawr0002br_1677608336_g.jpg&w=1080&q=75", title: "Motorola Moto G53", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 14, idCategory: 2, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F537223%2FSmartphone-Motorola-Moto-G24-128GB-4GB-RAM-C-mera-50MP-Selfie-8MP-Tela-6-6-Grafite_1726152494_g.jpg&w=1080&q=75", title: "Motorola Moto G24", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 15, idCategory: 2, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F502107%2FSmartphone-Motorola-Moto-G84-5G-256GB-8GB-RAM-C-mera-Dupla-50Mp-Tela-6-5-Android-13-Grafite-Xt2347_1723122172_g.jpg&w=1080&q=75", title: "Motorola Moto G84", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 16, idCategory: 2, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F525379%2FSmartphone-Motorola-Moto-G34-5g-4GB-RAM-SSD-128GB-Azul_1726697876_g.jpg&w=1080&q=75", title: "Motorola Moto G34 5g", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 17, idCategory: 2, image: "https://kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F499190%2FSmartphone-Motorola-Edge-40-Neo-5g-256GB-8GB-RAM-C-mera-Dupla-50-Mp-13-Mp-Selfie-32mp-E-Tela-De-6-55Polegadas-Black-Beauty_1722887572_g.jpg&w=1080&q=75", title: " Motorola Edge 40 Neo 5g", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 18, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F595075%2FSmartphone-Xiaomi-Redmi-Note-13-Pro-4G-256GB-8GB-Ram-Tela-6-67-Amoled-Preto_1724436941_g.jpg&w=1080&q=75", title: "Xiaomi Redmi Note 13 Pro", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 19, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F547901%2FSmartphone-Poco-X6-Pro-256GB-8GB-RAM-Tela-6-67-_1721247898_g.jpg&w=1080&q=75", title: "Poco X6 Pro 256GB", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 20, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F589536%2FXiaomi-Poco-M6-Pro-Dual-Sim-4-G-8GB-256gb-Black_1727122071_g.jpg&w=1080&q=75", title: "Xiaomi Poco M6 Pro Dual Sim", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 21, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F616077%2FSmartphone-Xiaomi-Redmi-13c-256GB-8GB-RAM-Tela-6-74-90Hz-C-mera-50MP-Dual-Sim-Preto_1723749648_g.jpg&w=1080&q=75", title: "Xiaomi Redmi 13c", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 22, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F637674%2FCelular-Xiaomi-Redmi-12-8GB-De-Ram-256gb-Tela-6-79-Dual-Sim-Branco_1726672646_g.jpg&w=1080&q=75", title: "Xiaomi Redmi 12", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 23, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F545747%2FSmartphone-Xiaomi-Redmi-Note-13-Br-256GB-8GB-RAM-C-mera-108MP-Tela-6-67-Verde_1727442364_g.jpg&w=1080&q=75", title: "Xiaomi Redmi Note 13 Br", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 27, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F639839%2FXiaomi-Redmi-Note-11-Pro-Global-128GB-8GB-Mediatek-Tela-6-67_1727117213_g.jpg&w=1080&q=75", title: "Redmi Note 11 Pro Globa", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },

        { id: 28, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F237591%2FSmartphone-Xiaomi-Poco-M3-4GB-64GB-Vers-o-Global-Cor-Amarelo_1727116625_g.jpg&w=1080&q=75", title: "Xiaomi Poco M3", description: "4G, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", price: 2000 },


        { id: 29, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F634690%2Fiphone-16-128gb-ultramarino_1727104401_g.jpg&w=1080&q=75", title: "iPhone 16 Apple 128GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 2000 },

        { id: 30, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F634688%2Fiphone-16-128gb-branco_1727103006_g.jpg&w=750&q=75", title: "iPhone 16 Apple 128GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 2000 },

        { id: 31, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F634691%2Fiphone-16-128gb-verde-acinzentado_1727104853_g.jpg&w=750&q=75", title: "iPhone 16 Apple 128GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 2000 },

        { id: 32, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F634690%2Fiphone-16-128gb-ultramarino_1727104401_g.jpg&w=1080&q=75", title: "iPhone 16 Apple 128GB Plus", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 2000 },

        { id: 33, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F634688%2Fiphone-16-128gb-branco_1727103006_g.jpg&w=750&q=75", title: "iPhone 16 Apple 128GB Max", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 2000 },

        { id: 34, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F634690%2Fiphone-16-128gb-ultramarino_1727104401_g.jpg&w=1080&q=75", title: "iPhone 16 Apple 128GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 2000 },

        { id: 35, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F486309%2Fiphone-15-apple-pro-max-256gb-titanio-azul-tela-de-6-7-camera-dupla-de-48mp-ios-mu7a3be-a_1699365824_g.jpg&w=750&q=75", title: "iPhone 15 Pro Max Apple 256GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 7999.90 },

        { id: 36, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F486275%2Fiphone-15-pro-apple-256gb-titanio-natural-tela-de-6-1-camera-tripla-de-48mp-ios-mtv53be-a_1699566926_g.jpg&w=750&q=75", title: "iPhone 16 Apple 128GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 7999.90 },

        { id: 37, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fmagalu%2F346769%2FiPhone-12-Apple-64GB-Preto-Tela-6-1-12MP-iOS_1652202430_g.jpg&w=750&q=75", title: "iPhone 12 Apple 64GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 2000 },

        { id: 38, idCategory: 4, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fmagalu%2F347001%2FApple-iPhone-13-128GB-Meia-noite-Tela-6-1-12MP_1652209018_g.jpg&w=750&q=75", title: "iPhone 13 Apple, 128GB", description: "Câmera Dupla de 48MP, Tela 6,1', Ultramarino", price: 3800 },
    ]
}