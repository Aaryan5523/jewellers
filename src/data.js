import ringImg from './assets/ring.png';
import earringsImg from './assets/earrings.png';
import braceletImg from './assets/bracelet.png';
import heroImg from './assets/hero.png';
import goldCollection from './assets/gold_collection.png';
import silverCollection from './assets/silver_collection.png';

export const products = [
    {
        id: 1001,
        title: 'New Custom Piece 1',
        price: '3,500',
        category: 'Gold',
        image: '/assets/new_product.jpg',
        description: 'Exquisite custom design featuring the finest craftsmanship.',
        details: [
            '22k Gold',
            'Custom Design',
            'Handcrafted'
        ]
    },
    {
        id: 1002,
        title: 'New Custom Piece 2',
        price: '4,200',
        category: 'Gold',
        image: '/assets/new_product_2.jpg',
        description: 'Another beautiful custom addition to our collection.',
        details: [
            '18k Gold',
            'Exclusive Design',
            'Limited Edition'
        ]
    },
    {
        id: 1,
        title: 'Emerald Cut Ring',
        price: '2,499',
        category: 'Gold',
        image: ringImg,
        description: 'A stunning emerald-cut diamond set in a handcrafted 18k yellow gold band. This ring embodies timeless elegance and sophisticated style.',
        details: [
            '1.5 Carat Emerald Cut Diamond',
            '18k Handcrafted Gold Band',
            'Conflict-free Gems',
            'Certified Authenticity'
        ]
    },
    {
        id: 2,
        title: 'Diamond Drop Earrings',
        price: '1,850',
        category: 'Platinum 925',
        image: earringsImg,
        description: 'Breathtaking diamond drop earrings that capture and reflect light with every movement. Perfect for making a statement at any evening event.',
        details: [
            'Total Weight: 2.0 Carat',
            'Premium Quality Diamonds',
            'Platinum Setting',
            'Hand-finished polishing'
        ]
    },
    {
        id: 3,
        title: 'Classic Pearl Bracelet',
        price: '950',
        category: 'Silver',
        image: braceletImg,
        description: 'A delicate collection of luminous freshwater pearls, hand-strung on a silk thread with a solid gold clasp. A classic staple for any jewellery box.',
        details: [
            '8mm Freshwater Pearls',
            '14k Solid Gold Clasp',
            'Adjustable Length: 7-8 inches',
            'Lustrous Surface Quality'
        ]
    },
    {
        id: 15,
        title: 'Sterling Silver Hoops',
        price: '150',
        category: 'Silver',
        image: silverCollection,
        description: 'Classic sterling silver hoop earrings for everyday elegance.',
        details: ['925 Sterling Silver', 'High Polish', 'Classic Series']
    },
    {
        id: 16,
        title: 'Silver Chain Link',
        price: '300',
        category: 'Silver',
        image: silverCollection,
        description: 'Modern silver chain bracelet with bold links.',
        details: ['925 Silver', 'Heavy Weight', 'Modern Collection']
    },
    {
        id: 17,
        title: 'Oxidized Silver Band',
        price: '180',
        category: 'Silver',
        image: silverCollection,
        description: 'Textured silver band with an oxidized finish.',
        details: ['Oxidized Silver', 'Hand Hammered', 'Artisan Series']
    },
    {
        id: 25,
        title: 'Platinum Solitaire Ring',
        price: '3,500',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Premium platinum solitaire ring with brilliant cut diamond.',
        details: ['950 Platinum', '1.0 Carat', 'Signature Series']
    },
    {
        id: 26,
        title: 'Platinum Wedding Band',
        price: '1,800',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Timeless platinum wedding band with comfort fit.',
        details: ['Platinum 950', 'Comfort Fit', 'Wedding Collection']
    },
    {
        id: 27,
        title: 'Platinum Tennis Bracelet',
        price: '5,200',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Classic tennis bracelet set in pure platinum.',
        details: ['3.0 Carat Total', 'Secure Clasp', 'Luxury Series']
    },
]
