import { axiosClient } from '../../../api/axiosClient';

export interface CompanyStatItem {
    value: string;
    label: string;
}

export const fetchCompanyStats = async (): Promise<CompanyStatItem[]> => {
    try {
        const response = await axiosClient.get('/company-stats');
        return response.data;
    } catch (error) {
        console.error(error);
        // Fallback data in case of API failure
        return [
            { value: '10+', label: 'Global Sectors' },
            { value: '50M+', label: 'Users Reached' },
            { value: '100%', label: 'Commitment' },
        ];
    }
};