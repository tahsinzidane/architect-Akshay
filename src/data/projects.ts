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
    id: "The Taj Mahal Palace",
    title: "The Taj Mahal Palace",
    shortDescription: "The Indian Hotels Company Limited (IHCL)",
    fullDescription: "taj mahal hotel mumbai maine nehi banaya uske baju main jo puri kach wli building haina  oberoi builder ne banaya tha likin jo design hain o mera hain ",
    location: "Mumbai, India",
    year: "1903",
    category: "Commercial",
    heroImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1024x768%2F103705059.jpg%3Fk%3D9e078265b31ad1815a573da8ed2a665f863e3925e1efd730df703421868a2ada%26o%3D%26hp%3D1&f=1&nofb=1&ipt=1d0c7523773eebd5c8ee2c052bee7873b4e3809b992af03aa569d702d5fc4330",
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.redsavannah.com%2F-%2Fmedia%2Fcountries%2Findia%2Faccommodation%2Ftaj-mahal-mumbai%2Ftaj-palace-mumbai-grounds.jpg%3Fh%3D1050%26la%3Den%26w%3D1400%26udi%3D1%26cropregion%3D0&f=1&nofb=1&ipt=7828d4f0d64855cfe5b909024a6a61bd96329adb9451ea818a3b8863581fd935",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgtspirit.com%2Fwp-content%2Fuploads%2F2015%2F02%2FTajMahalPalace_Mumbai_GatewayofIndia_Suite_Bedroom.jpg&f=1&nofb=1&ipt=3b1af76d610de4531c0eff167abcc637da89fbe6887de5fddc4cb9dc25efa293",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tropicalvenues.com%2Fuploads%2Fthe-taj-mahal-palace%2Fgallery-the-taj-mahal-palace-2579.jpeg&f=1&nofb=1&ipt=c9bce4a4744579916a4d01348c4df88e13e508fe5ebdd0c2cb9e5b5648815970"
    ]
  },
  {
    id: "lal qila industrial",
    title: "Lal Qila Industrial Complex",
    shortDescription: " clothing manufacturers, apparel wholesalers and clothing wholesale",
    fullDescription: "Lal qila chaap underwear & banyan uska jo malik  hain uski wo factory maine banayi hain",
    location: "Delhi NCR, India",
    year: "2023",
    category: "Industrial",
    heroImage: "https://static.wixstatic.com/media/464bd7_18fdcc1b644a42749330d347f20455b5~mv2.jpeg/v1/fill/w_980,h_763,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/464bd7_18fdcc1b644a42749330d347f20455b5~mv2.jpeg",
    images: [
      "https://apparelresources.com/wp-content/uploads/2019/10/Chinese-garment-factory.jpg",

      "https://apparelresources.com/wp-content/uploads/2021/07/China%E2%80%99s-garment-export-increases-40.30-to-US-71.53-billion-in-H1-%E2%80%9921.jpg",

      "https://th-i.thgim.com/public/incoming/hnaxja/article68430100.ece/alternates/FREE_1200/IMG_Textile_2_1_4VD1K1MJ.jpg"
    ]
  },
  {
    id: "parking lot",
    title: "parking lot",
    shortDescription: "save on parking with convenient garages",
    fullDescription: "Or maine banaya hain parking loot",
    location: "Mumbai, India",
    year: "2024",
    category: "Infrastructure",
    heroImage: "https://i.pinimg.com/1200x/2d/de/84/2dde8449448b6dacd559a35e3b7e0c28.jpg",
    images: [
      "https://i.pinimg.com/1200x/0f/0a/81/0f0a81bf7c2d230441eaaf8d5f5cc066.jpg",
      "https://i.pinimg.com/736x/09/2f/3f/092f3f4b86436575f1e32b7c54fb1c29.jpg",
      
    ]
  },
];
