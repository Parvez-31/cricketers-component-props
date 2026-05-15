export interface Cricketers {
   id: string; 
    name: string;
    country: string;
    role: string;
    jerseyNumber: number;
    age:number;
    battingStyle: string;
    bowlingStyle: string;
    isCaptain: boolean;
    
    category: Category;
    
    images: string[];
    
    subStats: SubStats[];
    
    reviews: Reviews[];
}


export interface Category {
    id:string;
    name: string;
    slug: string;
    icon: string
}

export interface SubStats {
    id: string;
    format:string;
    matches: number;
    runs: number;
    average: number;
    centuries?: number;
    wickets?: number;
}

export interface Reviews {
    id: string;
    fanName: string;
    rating: number;
    comment: string;
    createdAt: string;
}