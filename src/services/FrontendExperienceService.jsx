// npm add axios

import axios from "axios";

const FRONTEND_EXPERIENCE_API_BASE_URL = '/frontend-experience';

class FrontendExperienceService {

    getFrontendExperiences() {
        return axios.get(FRONTEND_EXPERIENCE_API_BASE_URL);
    }


}

export default new FrontendExperienceService();