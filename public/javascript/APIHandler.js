class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const response = await axios.get(`http://localhost:8000/characters`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching characters');
    }
  }

  async getOneRegister(id) {
    try {
      const response = await axios.get(`http://localhost:8000/characters/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching character');
    }
  }

  async createOneRegister(characterData) {
    try {
      const response = await axios.post(`http://localhost:8000/characters`, characterData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating character');
    }
  }

  async updateOneRegister(id, characterData) {
    try {
      const response = await axios.patch(`http://localhost:8000/characters/${id}`, characterData);
      return response.data;
    } catch (error) {
      throw new Error('Error updating character');
    }
  }

  async deleteOneRegister(id) {
    try {
      await axios.delete(`http://localhost:8000/characters/${id}`);
    } catch (error) {
      throw new Error('Error deleting character');
    }
  }
}
