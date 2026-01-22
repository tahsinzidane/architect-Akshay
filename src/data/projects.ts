export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: string;
  category: string;
  heroImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "taj-glass-pavilion",
    title: "Taj Glass Pavilion",
    shortDescription: "A modern glass structure harmonizing with Mumbai's iconic heritage",
    fullDescription: "The Taj Glass Pavilion represents a dialogue between contemporary architecture and historical context. Positioned adjacent to the Taj Mahal Hotel, this structure employs advanced glass technology to create transparency while maintaining thermal efficiency. The design philosophy centers on visual permeability—allowing the heritage structure to remain the primary focal point while offering a modern counterpoint that speaks to Mumbai's evolution as a global city.",
    location: "Mumbai, India",
    year: "2024",
    category: "Commercial",
    heroImage: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "lal-qila-industrial",
    title: "Lal Qila Industrial Complex",
    shortDescription: "Industrial architecture reimagined with dignity and function",
    fullDescription: "The Lal Qila Chaap manufacturing facility challenges the notion that industrial spaces must sacrifice aesthetics for function. This complex integrates production workflows with worker welfare spaces, natural lighting systems, and sustainable ventilation. The architecture celebrates the dignity of manufacturing while maintaining operational efficiency. Raw concrete meets strategic glazing to create an environment where craftsmanship flourishes.",
    location: "Delhi NCR, India",
    year: "2023",
    category: "Industrial",
    heroImage: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "vertical-mobility-plaza",
    title: "Vertical Mobility Plaza",
    shortDescription: "Multi-level parking infrastructure as urban sculpture",
    fullDescription: "The Vertical Mobility Plaza transforms the utilitarian parking structure into civic architecture. Rather than hiding vehicles behind opaque facades, the design celebrates movement through perforated metal screens that animate with shadow play throughout the day. The structure incorporates electric vehicle charging infrastructure, bicycle parking, and pedestrian pathways that connect to the broader urban fabric. Rooftop gardens provide green space while managing stormwater.",
    location: "Mumbai, India",
    year: "2024",
    category: "Infrastructure",
    heroImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "breathing-commons",
    title: "The Breathing Commons",
    shortDescription: "An urban park designed for contemplation and community",
    fullDescription: "The Breathing Commons addresses Mumbai's need for public green space through careful landscape architecture and minimal built intervention. The design creates a sequence of outdoor rooms—spaces for solitude, gathering, play, and reflection. Native planting strategies reduce maintenance requirements while supporting local biodiversity. Water features provide cooling and mask urban noise, creating an oasis of calm within the city's density.",
    location: "Mumbai, India",
    year: "2023",
    category: "Landscape",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "threshold-pavilion",
    title: "Threshold Pavilion",
    shortDescription: "Public amenity architecture that elevates the everyday",
    fullDescription: "The Threshold Pavilion demonstrates that even the most functional public infrastructure deserves architectural consideration. This gateway facility combines essential amenities with a civic presence that marks arrival and departure. Clean geometries in exposed concrete provide durability while the interplay of solid and void creates natural ventilation. Integrated planters and seating transform necessary infrastructure into a pleasant pause in the urban journey.",
    location: "Mumbai, India",
    year: "2024",
    category: "Civic",
    heroImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1467226632440-65f0b4957563?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "eternal-ground",
    title: "Eternal Ground",
    shortDescription: "Cemetery architecture honoring memory through spatial poetry",
    fullDescription: "Eternal Ground approaches memorial architecture with profound respect for grief and remembrance. The design creates a contemplative landscape where architecture emerges from the earth rather than imposing upon it. Stone walls define intimate memorial gardens while a central pavilion provides shelter for ceremonies. The material palette—weathering steel, local stone, and native grasses—ages gracefully, becoming more beautiful with time as the space accumulates meaning.",
    location: "Maharashtra, India",
    year: "2023",
    category: "Memorial",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop"
    ]
  }
];
