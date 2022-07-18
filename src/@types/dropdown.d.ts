export interface Idropdown {
    placeholder: string;
    title: string;
    types?: [{
        id: string;
        all: string;
        public: string;
        private: string;
    }];
    orders?: [{
        id: string;
        name: string;
        updated: string;
    }]
}

