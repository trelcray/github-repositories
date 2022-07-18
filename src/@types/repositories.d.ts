export interface Irepositories {
    nodes: [{
      id: string;
      name: string;
      description: string;
      isPrivate: boolean;
      isArchived: boolean;
      updatedAt: string;
    }]
  }