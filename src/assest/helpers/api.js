import axios from 'axios';

const BASE_URL = 'https://razanserversalon.onrender.com/api';
// const BASE_URL = "http://10.0.2.2:3000/api";



// Fetching user data
export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
// Fetching client data
export const fetchClientsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/clients`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching client data:', error);
    return null;
  }
};

// Fetching appointments data
export const fetchAppointmentsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/appointments/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching appointments data:', error);
    throw error;
  }
};

// Fetching suppliers items data
export const fetchSuppliersData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/suppliers`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching suppliers data:', error);
    throw error;
  }
};

// Fetching goods  data
export const fetchGoodsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/goods/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching goods data:', error);
    throw error;
  }
};


// Login
export const logIn = async (name, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, { name, password });
    if (response.data.message === 'Login failed') {
      return { status: false, user: null };
    } else {
      const user = response.data.user;
      const token = user?.token;

      if (!token) {
        console.error('Token is undefined or null');
        return { status: false, user: null };
      }

      // Store the token in localStorage
      localStorage.setItem('authToken', token);
      return { status: true, user };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { status: false, user: null };
  }
};

// Logout
export const logout = async () => {
  try {
    localStorage.removeItem('authToken');
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    return false;
  }
};

// Save client data
export const featchsaveClient = async (clientData) => {
  try {
    const response = await fetch(`${BASE_URL}/clients/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    return(response.ok);
  } catch (error) {
    console.error('Error saving client data:', error);
    return null;
  }
};

// Create appointment
export const featchCreateAppointment = async (appointment) => {
console.log(appointment);
  try {
    const response = await fetch(`${BASE_URL}/appointments/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });
    return response.status === 201;
  } catch (error) {
    console.error('Error creating appointment:', error);
    return false;
  }
};


export const featchCreateSupplier = async (supplier) => {
  try {
    const response = await fetch(`${BASE_URL}/suppliers/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(supplier),
    });

    if(response.ok)
      {return true;}
    return false;

  } catch (error) {
    console.error('Error saving suppliers data:', error);
    return false;
  }
};

export const featchCreateGoods = async (goods) => {

  try {
    const response = await fetch(`${BASE_URL}/goods/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(goods),
    });

    if(response.ok)
      {return true;}
    return false;

  } catch (error) {
    console.error('Error saving goods data:', error);
    return false;
  }
};


export const fetchDeleteClient = async (clientId) => {
  try {
    const response = await fetch(`${BASE_URL}/clients/delete/${clientId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.ok;
  } catch (error) {
    console.error('Error fetching Client data:', error);
    throw error;
  }
};

export const fetchDeleteAppointment = async (appointmentId) => {
  try {
    const response = await fetch(`${BASE_URL}/appointments/delete/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.ok;
  } catch (error) {
    console.error('Error fetching Appointment data:', error);
    throw error;
  }
};

export const fetchDeleteGoods = async (goodsId) => {
  try {
    const response = await fetch(`${BASE_URL}/goods/${goodsId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.ok;
  } catch (error) {
    console.error('Error fetching Goods data:', error);
    throw error;
  }
};

export const fetchDeleteSupplier = async (supplierId) => {
  try {
    const response = await fetch(`${BASE_URL}/suppliers/${supplierId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.ok;
  } catch (error) {
    console.error('Error fetching Supplier data:', error);
    throw error;
  }
};



export const fetchUpdateClient = async (updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/clients/update/${updatedData.phoneNumber}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

export const fetchUpdateAppointment = async (updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/appointments/update/${updatedData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating Appointment:', error);
    throw error;
  }
};

export const fetchUpdateGoods = async (updatedData) => {
  try {

    const response = await fetch(`${BASE_URL}/goods/${updatedData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating goods:', error);
    throw error;
  }
};

export const fetchUpdateSuppliers = async (updatedData) => {
  try {

    
    const response = await fetch(`${BASE_URL}/suppliers/${updatedData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating supplier:', error);
    throw error;
  }
};

export const fetchUpdateUser = async (updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${updatedData.email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};



// export const SendEmail = async (formData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/client/send-email`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     if (result.success) {
//       console.log('Email sent successfully');
//       return true;
//     } else {
//       console.error('Error sending email', result);
//       return false;
//     }
//     } catch (error) {
//       console.error('Error:', error);
//       return false;
//     }

//}