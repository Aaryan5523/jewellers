import ringImg from './assets/ring.png';
import earringsImg from './assets/earrings.png';
import braceletImg from './assets/bracelet.png';
import heroImg from './assets/hero.png';
import goldCollection from './assets/gold_collection.png';
import silverCollection from './assets/silver_collection.png';

export const products = [
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
        id: 4,
        title: 'Luxury Diamond Necklace',
        price: '12,000',
        category: 'Gold',
        image: heroImg,
        description: 'Our signature masterpiece. A cascading row of brilliant-cut diamonds that drape elegantly, creating an unmatched aura of luxury and brilliance.',
        details: [
            'Total Weight: 10 Carat',
            'D-Color, VVS1 Clarity Diamonds',
            'Custom 18k White Gold Setting',
            'Master Jeweller Crafted'
        ]
    },
    {
        id: 5,
        title: 'Gold Solitaire Ring',
        price: '1,200',
        category: 'Gold',
        image: goldCollection,
        description: 'A classic solitaire diamond ring set in 18k yellow gold.',
        details: ['0.8 Carat Diamond', '18k Gold', 'Classic Series']
    },
    {
        id: 6,
        title: 'Heirloom Gold Band',
        price: '850',
        category: 'Gold',
        image: goldCollection,
        description: 'Vintage inspired gold band with intricate detailing.',
        details: ['18k Gold', 'Hand Engraved', 'Vintage Collection']
    },
    {
        id: 7,
        title: 'Royal Gold Pendant',
        price: '2,100',
        category: 'Gold',
        image: goldCollection,
        description: 'A majestic gold pendant featuring a central diamond.',
        details: ['1.0 Carat Diamond', '22k Gold Chain', 'Royal Series']
    },
    {
        id: 8,
        title: 'Modern Gold Stack',
        price: '650',
        category: 'Gold',
        image: goldCollection,
        description: 'Minimalist gold ring perfect for stacking.',
        details: ['14k Gold', 'Modern Design', 'Everyday Wear']
    },
    {
        id: 9,
        title: 'Gold Statement Neck',
        price: '5,500',
        category: 'Gold',
        image: goldCollection,
        description: 'Bold gold necklace that commands attention.',
        details: ['22k Solid Gold', 'Handcrafted', 'Statement Collection']
    },
    {
        id: 10,
        title: 'Eternity Gold Ring',
        price: '3,200',
        category: 'Gold',
        image: goldCollection,
        description: 'Full circle of diamonds set in a gold band.',
        details: ['2.0 Carat Total', '18k Gold', 'Eternity Series']
    },
    {
        id: 11,
        title: 'Rose Gold Delicate',
        price: '450',
        category: 'Gold',
        image: goldCollection,
        description: 'Subtle and sweet rose gold bracelet.',
        details: ['14k Rose Gold', 'Delicate Chain', 'Gift Series']
    },
    {
        id: 12,
        title: 'Gold Geometric Ring',
        price: '900',
        category: 'Gold',
        image: goldCollection,
        description: 'Contemporary geometric shapes in yellow gold.',
        details: ['18k Gold', 'Modern Art', 'Unique Design']
    },
    {
        id: 13,
        title: 'Bridal Gold Set',
        price: '15,000',
        category: 'Gold',
        image: goldCollection,
        description: 'Complete bridal set including necklace and earrings.',
        details: ['22k Gold', 'Traditional Design', 'Wedding Collection']
    },
    {
        id: 14,
        title: 'Art Deco Gold Ring',
        price: '2,800',
        category: 'Gold',
        image: goldCollection,
        description: 'Art Deco inspired design for the modern era.',
        details: ['1.2 Carat Diamond', '18k Gold', 'Art Deco Series']
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
        id: 18,
        title: 'Minimalist Silver Ring',
        price: '95',
        category: 'Silver',
        image: silverCollection,
        description: 'Sleek and simple silver ring.',
        details: ['Sterling Silver', 'Minimalist Design', 'Essentials']
    },
    {
        id: 19,
        title: 'Silver Pendant Necklace',
        price: '250',
        category: 'Silver',
        image: silverCollection,
        description: 'Elegant silver pendant on a delicate chain.',
        details: ['925 Silver', 'Adjustable Chain', 'Gift Series']
    },
    {
        id: 20,
        title: 'Chunky Silver Cuff',
        price: '450',
        category: 'Silver',
        image: silverCollection,
        description: 'Statement silver cuff bracelet.',
        details: ['Solid Silver', 'Structured', 'Statement Piece']
    },
    {
        id: 21,
        title: 'Silver Pearl Drop',
        price: '320',
        category: 'Silver',
        image: silverCollection,
        description: 'Silver earrings featuring fresh water pearls.',
        details: ['Sterling Silver', 'Freshwater Pearl', 'Classic Elegance']
    },
    {
        id: 22,
        title: 'Geometric Silver Studs',
        price: '120',
        category: 'Silver',
        image: silverCollection,
        description: 'Modern geometric stud earrings in silver.',
        details: ['925 Silver', 'Butterfly Back', 'Modern Art']
    },
    {
        id: 23,
        title: 'Silver Locket',
        price: '280',
        category: 'Silver',
        image: silverCollection,
        description: 'Vintage style silver locket necklace.',
        details: ['Antique Finish', 'Photo Compartment', 'Vintage Series']
    },
    {
        id: 24,
        title: 'Silver Snake Chain',
        price: '200',
        category: 'Silver',
        image: silverCollection,
        description: 'Fluid snake chain necklace in sterling silver.',
        details: ['Italian Silver', 'Smooth Finish', 'Essentials']
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
    {
        id: 28,
        title: 'Platinum Halo Earrings',
        price: '2,400',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Diamond halo earrings in a platinum setting.',
        details: ['Platinum 950', 'Halo Design', 'Evening Wear']
    },
    {
        id: 29,
        title: 'Platinum Eternity Band',
        price: '4,000',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Full circle eternity band crafted in platinum.',
        details: ['2.5 Carat Total', 'Platinum Setting', 'Eternity Series']
    },
    {
        id: 30,
        title: 'Platinum Chain',
        price: '1,500',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Heavy platinum chain for a sophisticated look.',
        details: ['Solid Platinum', 'Durable Link', 'Men\'s Collection']
    },
    {
        id: 31,
        title: 'Platinum Cross Pendant',
        price: '900',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Simple and elegant platinum cross pendant.',
        details: ['Platinum 950', 'Polished Finish', 'Symbolic Series']
    },
    {
        id: 32,
        title: 'Platinum Signet Ring',
        price: '2,100',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Classic signet ring in solid platinum.',
        details: ['Heirloom Quality', 'Engravable', 'Signature Series']
    },
    {
        id: 33,
        title: 'Platinum Cuff Bracelet',
        price: '3,000',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Modern open cuff design in platinum.',
        details: ['Platinum 950', 'Minimalist', 'Modern Collection']
    },
    {
        id: 34,
        title: 'Platinum Drop Necklace',
        price: '2,800',
        category: 'Platinum 925',
        image: silverCollection,
        description: 'Elegant Y-drop necklace in platinum.',
        details: ['Platinum Chain', 'Diamond Accent', 'Evening Elegance']
    },
];
