import {
  StoreInfo,
  ServiceItem,
  CategoryItem,
  MedicineProduct,
  Testimonial,
  FAQItem,
  GalleryImage
} from '../types';

export const STORE_INFO: StoreInfo = {
  name: "Nishant Medical Hall",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy & Healthcare Essentials",
  address: "Sakura Mor, Kurtha Kinjar Road, Kurtha, Arwal, Bihar - 804421",
  locality: "Sakura Mor",
  city: "Kurtha",
  district: "Arwal",
  state: "Bihar",
  pincode: "804421",
  phone: "09955983898",
  formattedPhone: "+91 99559 83898",
  whatsapp: "919955983898",
  formattedWhatsapp: "+91 99559 83898",
  email: "nishantmedicalhall@gmail.com",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.568213601132!2d84.8722!3d25.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d249f87c11f77%3A0x1d3a010d2bc4a548!2sKurtha%2C%20Bihar%20804421!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapShareUrl: "https://maps.google.com/?q=Kurtha+Kinjar+Road+Arwal+Bihar+804421",
  workingHours: {
    weekdays: "Monday – Saturday: 7:00 AM – 10:00 PM",
    sunday: "Sunday: 8:00 AM – 9:00 PM",
    emergency: "24/7 Emergency Support via Phone / WhatsApp"
  }
};

export const WHY_CHOOSE_US = [
  {
    id: "1",
    title: "100% Genuine Medicines",
    description: "Sourced strictly from certified drug manufacturers and authorized pharma distributors with guaranteed authenticity.",
    icon: "ShieldCheck",
    badge: "Verified Quality"
  },
  {
    id: "2",
    title: "Experienced & Helpful Staff",
    description: "Our knowledgeable team offers compassionate guidance and assists with prescription clarity.",
    icon: "Award",
    badge: "Expert Support"
  },
  {
    id: "3",
    title: "Affordable & Fair Prices",
    description: "Maximum savings on MRP for essential health products, diabetic supplies, and daily medicines.",
    icon: "HeartPulse",
    badge: "Best Value"
  },
  {
    id: "4",
    title: "Fast & Prompt Service",
    description: "Quick medicine pickup at store counter or fast local packing for immediate needs.",
    icon: "Clock",
    badge: "Zero Delays"
  },
  {
    id: "5",
    title: "Prescription Medicines",
    description: "Complete inventory of hard-to-find prescription drugs, specialized therapies, and chronic disease care.",
    icon: "FileText",
    badge: "Full Stock"
  },
  {
    id: "6",
    title: "Healthcare Products",
    description: "Comprehensive range of surgical items, baby care, personal hygiene, and diagnostic instruments.",
    icon: "Stethoscope",
    badge: "All-In-One"
  },
  {
    id: "7",
    title: "Trusted Local Pharmacy",
    description: "Serving the families of Kurtha, Kinjar, and Arwal district with dedicated care for over a decade.",
    icon: "MapPin",
    badge: "Community Favorite"
  },
  {
    id: "8",
    title: "Easy WhatsApp Support",
    description: "Simply snap a photo of your prescription and order instantly on WhatsApp without waiting.",
    icon: "MessageCircle",
    badge: "Instant Order"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "med-sales",
    title: "Medicine Sales",
    description: "Complete range of branded and genuine generic medicines for daily acute and chronic healthcare needs.",
    iconName: "Pill",
    category: "Core Pharmacy",
    popular: true,
    features: ["Branded & Generic Medicines", "Proper Cold Chain Storage", "Authentic Sourcing", "Affordable Rates"]
  },
  {
    id: "rx-meds",
    title: "Prescription Medicines",
    description: "Doctor-prescribed therapeutic medicines for cardiology, neurology, gastroenterology, orthopedic, and infection care.",
    iconName: "FileText",
    category: "Prescription Care",
    popular: true,
    features: ["Valid Prescription Fulfillment", "Dosage Guidance", "Hard-to-find Medicines", "Batch & Expiry Checked"]
  },
  {
    id: "otc-meds",
    title: "OTC Medicines",
    description: "Over-the-counter remedies for fever, cold, cough, pain relief, acidity, allergy, and digestive wellness.",
    iconName: "ShoppingBag",
    category: "General Care",
    features: ["Instant Availability", "Top Indian & Global Brands", "Pain Relief Gels & Sprays", "Cough & Cold Solutions"]
  },
  {
    id: "baby-care",
    title: "Baby Care Products",
    description: "Gentle baby wipes, diapers, baby food, formula, skin lotions, baby soaps, and feeding accessories.",
    iconName: "HeartPulse",
    category: "Mother & Child",
    popular: true,
    features: ["Dermatologically Tested", "Himalaya, Johnson & Johnson, Sebamed", "Infant Nutrition", "Safe & Pure"]
  },
  {
    id: "personal-care",
    title: "Personal Care Products",
    description: "Skin care, oral hygiene, soaps, antiseptics, herbal cosmetics, and daily grooming essentials.",
    iconName: "Sparkles",
    category: "Daily Hygiene",
    features: ["Skin Moisturizers", "Herbal & Dermatological Creams", "Dental Hygiene Care", "Hair & Body Care"]
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care",
    description: "Glucometers, lancets, test strips, insulin pens, sugar-free sweeteners, and diabetic foot care products.",
    iconName: "Activity",
    category: "Chronic Care",
    popular: true,
    features: ["Accu-Chek & Contour Strips", "Insulin Storage Supplies", "Sugar-Free Health Supplements", "BP & Sugar Trackers"]
  },
  {
    id: "bp-monitor",
    title: "Blood Pressure Monitors",
    description: "Digital and manual BP monitors for precise home monitoring from trusted medical equipment brands.",
    iconName: "Thermometer",
    category: "Medical Devices",
    features: ["Omron Digital Monitors", "One-Touch Operation", "Memory Storage Models", "Clinically Validated"]
  },
  {
    id: "first-aid",
    title: "First Aid Supplies",
    description: "Complete home and emergency first-aid kits, antiseptics, bandages, gauze rolls, tapes, and burn remedies.",
    iconName: "Cross",
    category: "Emergency & Aid",
    features: ["Dettol & Savlon", "Sterile Bandages & Cotton", "Burnol & Ointments", "Complete First Aid Kits"]
  },
  {
    id: "surgical-items",
    title: "Surgical Items",
    description: "Hospital-grade sterile gloves, syringes, IV sets, face masks, disposable gowns, and dressing materials.",
    iconName: "Syringe",
    category: "Surgical Care",
    features: ["Sterile Syringes & Needles", "Surgical Gloves & Aprons", "Catheters & Cannulas", "Absorbent Cotton & Gauze"]
  },
  {
    id: "supplements",
    title: "Health Supplements",
    description: "Protein powders, multivitamins, calcium & vitamin D3, omega-3, iron, and immunity building formulations.",
    iconName: "Award",
    category: "Nutrition",
    popular: true,
    features: ["Whey & Plant Proteins", "Multivitamin Capsules", "Immunity Boosters", "Ayurvedic Tonic Range"]
  },
  {
    id: "medical-devices",
    title: "Medical Devices",
    description: "Nebulizers, pulse oximeters, digital thermometers, vaporizers, heating pads, and stethoscope accessories.",
    iconName: "Stethoscope",
    category: "Medical Devices",
    features: ["Compressor Nebulizers", "Finger Pulse Oximeters", "Infrared Thermometers", "Steam Inhalers"]
  },
  {
    id: "home-care",
    title: "Home Care Products",
    description: "Adult diapers, underpads, hot water bags, ice bags, orthopedic supports, and patient comfort aids.",
    iconName: "Truck",
    category: "Patient Comfort",
    features: ["Friends Adult Diapers", "Lumbar Belts & Knee Support", "Hot & Cold Gel Packs", "Mobility Aids Support"]
  }
];

export const CATEGORIES_LIST: CategoryItem[] = [
  {
    id: "tablets",
    name: "Tablets",
    description: "Antibiotics, pain relievers, cardiac care, antacids, and prescription fever tablets.",
    iconName: "Pill",
    itemCount: 450,
    featuredProducts: ["Paracetamol 650mg", "Pantoprazole 40mg", "Amoxicillin 500mg", "Telmisartan 40mg"],
    gradient: "from-blue-500/10 to-teal-500/10"
  },
  {
    id: "capsules",
    name: "Capsules",
    description: "Probiotics, iron supplements, multivitamins, and specialty antibiotics.",
    iconName: "Pill",
    itemCount: 320,
    featuredProducts: ["Rabeprazole + DSR", "Vitamin B-Complex", "Iron & Folic Acid", "Omega-3 Fish Oil"],
    gradient: "from-emerald-500/10 to-green-500/10"
  },
  {
    id: "syrups",
    name: "Syrups",
    description: "Cough syrups, digestive enzymes, antacid suspensions, pediatric care, and tonic formulations.",
    iconName: "ShoppingBag",
    itemCount: 180,
    featuredProducts: ["Benadryl Cough Formula", "Aristozyme Digestive", "Gelusil MPX", "Zincovit Syrup"],
    gradient: "from-cyan-500/10 to-blue-500/10"
  },
  {
    id: "injections",
    name: "Injections",
    description: "Emergency lifesaving injections, IV fluids, insulin vials, and tetanus toxoid.",
    iconName: "Syringe",
    itemCount: 95,
    featuredProducts: ["TT Tetanus Injection", "Insulin Glargine", "Cefrtriaxone 1g", "Diclomol Ampoule"],
    gradient: "from-rose-500/10 to-red-500/10"
  },
  {
    id: "equipment",
    name: "Medical Equipment",
    description: "Nebulizers, BP monitors, glucometers, oximeters, and digital thermometers.",
    iconName: "Stethoscope",
    itemCount: 65,
    featuredProducts: ["Omron BP Monitor", "Dr. Morepen Oximeter", "Accu-Chek Active", "Dr. Trust Nebulizer"],
    gradient: "from-indigo-500/10 to-purple-500/10"
  },
  {
    id: "protein",
    name: "Protein Supplements",
    description: "High quality protein powders for muscle, recovery, maternal health, and elderly nutrition.",
    iconName: "Award",
    itemCount: 40,
    featuredProducts: ["Protinex Original", "Ensure Complete Nutrition", "Horlicks Women Plus", "GNC Whey"],
    gradient: "from-amber-500/10 to-orange-500/10"
  },
  {
    id: "vitamins",
    name: "Vitamins & Minerals",
    description: "Calcium D3, Vitamin C, Zinc, B12, and comprehensive daily multivitamins.",
    iconName: "Sparkles",
    itemCount: 150,
    featuredProducts: ["Shelcal 500", "Limcee 500mg", "Becosules Z", "Neurobion Forte"],
    gradient: "from-yellow-500/10 to-amber-500/10"
  },
  {
    id: "skin-care",
    name: "Skin Care & Derma",
    description: "Antifungal creams, acne treatments, moisturizers, sunscreens, and soothing lotions.",
    iconName: "HeartPulse",
    itemCount: 110,
    featuredProducts: ["Candid-B Cream", "Cetaphil Gentle Cleanser", "Luliconazole Cream", "Aloe Vera Gel"],
    gradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    id: "baby-products",
    name: "Baby Care",
    description: "Baby wipes, diapers, baby powders, infant food, massage oil, and gentle shampoos.",
    iconName: "HeartPulse",
    itemCount: 140,
    featuredProducts: ["Pampers Diapers L/M", "Himalaya Baby Lotion", "Cerelac Stage 1/2/3", "Johnson's Powder"],
    gradient: "from-teal-500/10 to-emerald-500/10"
  },
  {
    id: "hygiene",
    name: "Personal Hygiene",
    description: "Antiseptics, hand sanitizers, intimate wash, soaps, and oral health care products.",
    iconName: "ShieldCheck",
    itemCount: 120,
    featuredProducts: ["Dettol Liquid 500ml", "Sensodyne Toothpaste", "Savlonic Handwash", "V-Wash Plus"],
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    id: "ortho",
    name: "Orthopedic Support",
    description: "Knee caps, lumbar belts, cervical collars, wrist bands, and crepe bandages.",
    iconName: "Activity",
    itemCount: 85,
    featuredProducts: ["Tynor Knee Support", "Flamingo Lumbar Belt", "Cervical Collar Soft", "Crepe Bandage 10cm"],
    gradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    id: "diabetic",
    name: "Diabetic Care Supplies",
    description: "Test strips, sugar substitutes, lancets, diabetic socks, and specialized foot creams.",
    iconName: "Activity",
    itemCount: 75,
    featuredProducts: ["Accu-Chek Test Strips 50s", "Sugar Free Gold", "Dr. Morepen Lancets 100s", "Diabetic Foot Cream"],
    gradient: "from-purple-500/10 to-indigo-500/10"
  }
];

export const SAMPLE_MEDICINES: MedicineProduct[] = [
  {
    id: "m1",
    name: "Dolo 650mg Tablet",
    category: "Tablets",
    composition: "Paracetamol 650mg",
    price: "₹30.50",
    mrp: "₹34.00",
    discount: "10% OFF",
    packaging: "Strip of 15 Tablets",
    requiresPrescription: false,
    inStock: true,
    popular: true,
    description: "Effective fever reducer and mild-to-moderate pain reliever for headache, body pain, and viral fever."
  },
  {
    id: "m2",
    name: "Pantocid 40mg Tablet",
    category: "Tablets",
    composition: "Pantoprazole 40mg",
    price: "₹140.00",
    mrp: "₹160.00",
    discount: "12% OFF",
    packaging: "Strip of 15 Tablets",
    requiresPrescription: true,
    inStock: true,
    popular: true,
    description: "Reduces stomach acid generation, providing relief from acidity, heartburn, GERD, and stomach ulcers."
  },
  {
    id: "m3",
    name: "Shelcal 500 Tablet",
    category: "Vitamins",
    composition: "Elemental Calcium 500mg + Vitamin D3 250 IU",
    price: "₹118.00",
    mrp: "₹131.00",
    discount: "10% OFF",
    packaging: "Strip of 15 Tablets",
    requiresPrescription: false,
    inStock: true,
    popular: true,
    description: "Essential calcium and D3 dietary supplement for strong bones, joint health, and osteoporosis prevention."
  },
  {
    id: "m4",
    name: "Accu-Chek Active Test Strips",
    category: "Diabetic Care",
    composition: "Blood Glucose Test Strips (50 Strips)",
    price: "₹950.00",
    mrp: "₹1049.00",
    discount: "9% OFF",
    packaging: "Box of 50 Strips",
    requiresPrescription: false,
    inStock: true,
    popular: true,
    description: "High accuracy blood glucose measuring test strips compatible with Accu-Chek Active Glucometer."
  },
  {
    id: "m5",
    name: "Omron Hem-7120 Digital BP Monitor",
    category: "Medical Equipment",
    composition: "Automated Upper Arm Blood Pressure Monitor",
    price: "₹2,150.00",
    mrp: "₹2,490.00",
    discount: "14% OFF",
    packaging: "1 Unit with Arm Cuff & Batteries",
    requiresPrescription: false,
    inStock: true,
    popular: true,
    description: "Clinically validated digital BP monitor featuring Intellisense technology and irregular heartbeat detection."
  },
  {
    id: "m6",
    name: "Benadryl Cough Formula 100ml",
    category: "Syrups",
    composition: "Diphenhydramine + Ammonium Chloride + Sodium Citrate",
    price: "₹125.00",
    mrp: "₹138.00",
    discount: "10% OFF",
    packaging: "100 ml Bottle",
    requiresPrescription: false,
    inStock: true,
    popular: true,
    description: "Provides fast relief from allergic cough, throat irritation, nasal congestion, and watery eyes."
  },
  {
    id: "m7",
    name: "Protinex Original Powder 250g",
    category: "Protein Supplements",
    composition: "High Protein Health Drink with Vitamins & Minerals",
    price: "₹385.00",
    mrp: "₹425.00",
    discount: "9% OFF",
    packaging: "250g Tin Pack",
    requiresPrescription: false,
    inStock: true,
    popular: true,
    description: "Fortified nutrition supplement providing essential amino acids, immunity building nutrients, and energy."
  },
  {
    id: "m8",
    name: "Himalaya Baby Lotion 200ml",
    category: "Baby Products",
    composition: "Olive Oil + Almond Oil Natural Herbal Formulation",
    price: "₹170.00",
    mrp: "₹190.00",
    discount: "10% OFF",
    packaging: "200 ml Bottle",
    requiresPrescription: false,
    inStock: true,
    description: "Nourishing, dermatologically tested baby lotion that keeps baby's delicate skin soft, supple, and protected."
  },
  {
    id: "m9",
    name: "Becosules Z Capsule",
    category: "Capsules",
    composition: "Vitamin B-Complex + Vitamin C + Zinc",
    price: "₹45.00",
    mrp: "₹50.00",
    discount: "10% OFF",
    packaging: "Strip of 20 Capsules",
    requiresPrescription: false,
    inStock: true,
    description: "Replenishes essential B-complex vitamins and zinc to treat mouth ulcers, tissue repair, and fatigue."
  },
  {
    id: "m10",
    name: "Tynor Knee Support Neoprene",
    category: "Orthopedic Support",
    composition: "Anatomical Neoprene Knee Sleeve",
    price: "₹490.00",
    mrp: "₹550.00",
    discount: "11% OFF",
    packaging: "Single Piece Box",
    requiresPrescription: false,
    inStock: true,
    description: "Controlled compression for arthritic knee pain, sports injury support, and joint stability."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kumar Sharma",
    location: "Kurtha Bazar, Arwal",
    rating: 5,
    comment: "Nishant Medical Hall is my primary store for all my parents' heart and diabetes medicines. They always give genuine medicines with clear instructions. Behavior of the staff is very polite.",
    date: "2 Weeks ago",
    verified: true,
    avatarText: "RK"
  },
  {
    id: "t2",
    name: "Dr. Ankit Verma",
    location: "Sakura Mor, Kurtha",
    rating: 5,
    comment: "As a local healthcare professional, I frequently recommend my patients to Nishant Medical Hall. Their storage conditions for temperature-sensitive drugs like insulin and vaccines are top notch.",
    date: "1 Month ago",
    verified: true,
    avatarText: "AV"
  },
  {
    id: "t3",
    name: "Sunita Devi",
    location: "Kinjar Road, Arwal",
    rating: 5,
    comment: "I needed baby care items and pulse oximeter urgently at night. Called Nishant Medical Hall and they arranged everything promptly. Very trustworthy medical shop in Kurtha!",
    date: "3 Weeks ago",
    verified: true,
    avatarText: "SD"
  },
  {
    id: "t4",
    name: "Manoj Singh",
    location: "Kurtha, Bihar",
    rating: 5,
    comment: "WhatsApp order feature is extremely useful! I just sent photo of my prescription on WhatsApp and picked up packed medicines within 10 minutes without waiting in line.",
    date: "Just recent",
    verified: true,
    avatarText: "MS"
  },
  {
    id: "t5",
    name: "Priya Kumari",
    location: "Arwal District",
    rating: 5,
    comment: "Very reasonable prices compared to other shops. All cosmetics, baby food, and genuine health supplements are readily available under one roof.",
    date: "2 Months ago",
    verified: true,
    avatarText: "PK"
  },
  {
    id: "t6",
    name: "Amitabh Chaudhury",
    location: "Sakura Mor Kurtha",
    rating: 5,
    comment: "The owner Nishant ji is very helpful. He carefully explains the dosage time and substitutes if an exact brand is out of stock. Truly the best medical hall in Arwal district.",
    date: "3 Months ago",
    verified: true,
    avatarText: "AC"
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Where is Nishant Medical Hall located in Kurtha?",
    answer: "We are located conveniently at Sakura Mor, Kurtha Kinjar Road, Kurtha, Arwal, Bihar - 804421. You can easily spot our store near Sakura Mor."
  },
  {
    id: "faq-2",
    category: "Orders",
    question: "How can I order medicines via WhatsApp?",
    answer: "Ordering via WhatsApp is simple! Click the 'WhatsApp Order' button on our website, fill in your details or simply attach a clear photo of your doctor's prescription. Our pharmacist will verify stock and confirm total amount immediately."
  },
  {
    id: "faq-3",
    category: "Medicines",
    question: "Are all medicines at Nishant Medical Hall 100% genuine?",
    answer: "Yes, 100%! We procure all medicines and healthcare supplies directly from registered pharma companies and certified distributors. We adhere strictly to Drug License norms and proper cold storage standards."
  },
  {
    id: "faq-4",
    category: "Store",
    question: "What are the working hours of Nishant Medical Hall?",
    answer: "Our physical store counter is open Monday through Saturday from 7:00 AM to 10:00 PM, and Sunday from 8:00 AM to 9:00 PM. For emergency medicine inquiries, you can reach us 24/7 on 09955983898."
  },
  {
    id: "faq-5",
    category: "Medicines",
    question: "Is a prescription required for purchasing medicines?",
    answer: "For Schedule H & H1 prescription drugs (antibiotics, cardiac medicines, psychiatric drugs, habit-forming medications), a valid doctor's prescription is legally required. OTC medicines, health supplements, and baby care products do not require a prescription."
  },
  {
    id: "faq-6",
    category: "Store",
    question: "Do you offer home delivery or order pre-packing in Kurtha?",
    answer: "Yes, we offer instant store pre-packing where your order is ready before you arrive. For nearby areas in Kurtha & Sakura Mor, we also assist with home drop options on request."
  },
  {
    id: "faq-7",
    category: "General",
    question: "What payment methods are accepted at the store?",
    answer: "We accept Cash, UPI payments (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and major Debit/Credit cards."
  },
  {
    id: "faq-8",
    category: "Medicines",
    question: "What if a specific medicine prescribed by my doctor is not immediately available?",
    answer: "If a rare or specialized medicine is temporarily out of stock, we can special-order it from central pharma distributors within 12 to 24 hours."
  },
  {
    id: "faq-9",
    category: "General",
    question: "Do you stock medical equipment like BP monitors and Glucometers?",
    answer: "Yes! We stock trusted medical devices like Omron BP monitors, Accu-Chek & Dr. Morepen Glucometers, finger pulse oximeters, digital thermometers, nebulizers, and steam vaporizers."
  },
  {
    id: "faq-10",
    category: "Orders",
    question: "Can I get discounts on my monthly chronic medicine purchases?",
    answer: "Yes, we offer special discount pricing and value offers for regular monthly prescription medicines for diabetic, BP, and heart patients."
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    title: "Nishant Medical Hall Store Front",
    category: "Store Front",
    url: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    description: "Modern, clean, and well-lit store entrance at Sakura Mor Kurtha Kinjar Road."
  },
  {
    id: "g2",
    title: "Organized Medicine Shelves",
    category: "Shelves",
    url: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    description: "Systematic, temperature-controlled drug storage and batch-organized shelves."
  },
  {
    id: "g3",
    title: "Diagnostic Equipment & Medical Devices",
    category: "Equipment",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    description: "Glucometers, BP monitors, nebulizers, and pulse oximeters from top medical brands."
  },
  {
    id: "g4",
    title: "Baby & Personal Care Display",
    category: "Products",
    url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
    description: "Complete inventory of infant food, dermatological creams, and baby skincare."
  },
  {
    id: "g5",
    title: "Qualified Pharmacist Desk",
    category: "Staff",
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    description: "Friendly counter service assisting customers with dosage guidance and prescriptions."
  },
  {
    id: "g6",
    title: "Healthcare & First Aid Supplies",
    category: "Products",
    url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=80",
    description: "Bandages, antiseptics, surgical gloves, and comprehensive emergency kits."
  }
];

export const WORKING_PROCESS_STEPS = [
  {
    step: "01",
    title: "Visit or WhatsApp",
    description: "Walk into our Sakura Mor store or send your prescription/medicine list on WhatsApp.",
    icon: "MessageCircle"
  },
  {
    step: "02",
    title: "Prescription Check",
    description: "Our pharmacist verifies doctor's instructions, dosage, expiry, and stock availability.",
    icon: "FileText"
  },
  {
    step: "03",
    title: "Quality Packing",
    description: "Medicines are safely packed under proper hygiene standards with batch details.",
    icon: "ShieldCheck"
  },
  {
    step: "04",
    title: "Easy Payment & Pick",
    description: "Pay via UPI, Cash, or Card and collect your genuine medicines instantly.",
    icon: "CheckCircle2"
  }
];
