document.addEventListener('DOMContentLoaded', () => {
    fetchCities();
    document.getElementById('teacherForm').addEventListener('submit', handleFormSubmit)
})

const fetchCities = async () => {
    try {
      // const response = await axios.get('https://api.aueb.gr/cities');
      const response = await axios.get('./cities.json');
      const cities = response.data;

      // Assume that the API returns an array of city objects
      // const cities = [
      //   { id: 1, name: "Αθήνα" },
      //   { id: 2, name: "Βόλος" },
      //   { id: 3, name: "Ιωάννινα" },
      //   { id: 4, name: "Καλαμάτα" },
      //   { id: 5, name: "Λαμία" },
      //   { id: 6, name: "Δράμα" },
      //   { id: 7, name: "Θεσσαλονίκη" },
      // ]

      document.getElementById('city').innerHTML = cities
                                                    .sort((a, b) => a.name.localeCompare(b.name, "el-GR"))
                                                    .map(city => `<option value="${city.id}">${city.name}</option>`)
                                                    .join('')
    } catch (error) {
      console.error('Error fetching cities')
    }
}

const handleFormSubmit = async (event) => {

    event.preventDefault();
    
    const formData = {
      firstname: document.getElementById('firstname').value.trim(),
      lastname: document.getElementById('lastname').value.trim(),
      vat: document.getElementById('vat').value.trim(),
      cityId: document.getElementById('city').value.trim()
    }

    try {

        //const response = await axios.post('https://api-aueb.gr/teachers', formData)
        //console.log('Form submitted successfully', response.data)
        alert('Teacher data submitted successfully' + JSON.stringify(formData) )
    } catch (error) {
      console.error('Error in submitting the form.')
      alert('Failed to submit the teacher form')
    }
} 