
export interface TalentProfile {
  id: string;
  username: string;
  avatarUrl: string;
  roles: string[];
  bio: string;
  verified: boolean;
  arPortfolio: ARScene[];
  smartContracts: Contract[];
  stats: {
    followers: number;
    engagementRate: number;
    completedContracts: number;
    rating: number;
  };
}

export interface ARScene {
  id: string;
  title: string;
  thumbnailUrl: string;
  sceneUrl: string;
  sceneData: Record<string, any>;
  createdAt: string;
}

export interface Contract {
  id: string;
  title: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  clientId: string;
  clientName: string;
  amount: number;
  currency: string;
  startDate: string;
  endDate: string;
  contractType: 'collaboration' | 'appearance' | 'licensing';
  transactionHash?: string;
}

export interface FeaturedTalent {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
  verified: boolean;
  featured: boolean;
}
