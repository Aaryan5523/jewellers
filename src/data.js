import ringImg from './assets/ring.png';
import earringsImg from './assets/earrings.png';
import braceletImg from './assets/bracelet.png';
import heroImg from './assets/hero.png';

export const products = [
    {
        id: 1,
        title: 'Emerald Cut Ring',
        price: '2,499',
        category: 'Rings',
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
        category: 'Earrings',
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
        category: 'Bracelets',
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
        id: 4,
        title: 'Luxury Diamond Necklace',
        price: '12,000',
        category: 'Necklaces',
        image: heroImg,
        description: 'Our signature masterpiece. A cascading row of brilliant-cut diamonds that drape elegantly, creating an unmatched aura of luxury and brilliance.',
        details: [
            'Total Weight: 10 Carat',
            'D-Color, VVS1 Clarity Diamonds',
            'Custom 18k White Gold Setting',
            'Master Jeweller Crafted'
        ]
    },
];
