// npm add axios

import axios from "axios";

const BACKEND_EXPERIENCE_API_BASE_URL = '/backend-experience';

class BackendExperienceService {

    getBackendExperiences() {
        return axios.get(BACKEND_EXPERIENCE_API_BASE_URL);
    }


}

export default new BackendExperienceService();