import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadWidget from '../Components/UploadWidget';
import { useNavigate } from 'react-router-dom';

function NewPostPage() {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        address: '',
        bedroom: '',
        bathroom: '',
        latitude: '',
        longitude: '',
        income: '',
        size: '',
        school: '',
        bus: '',
        city: '',
        restaurant: '',
        type: 'rent', // Default value
        property: 'apartment', // Default value
        utilities: 'owner', // Default value
        pet: 'allowed', // Default value
    });

    const handleInputData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8800/post", {
                postData: {
                    title: formData.title,
                    price: parseInt(formData.price),
                    address: formData.address,
                    city: formData.city,
                    bedroom: parseInt(formData.bedroom),
                    bathroom: parseInt(formData.bathroom),
                    type: formData.type,
                    property: formData.property,
                    latitude: formData.latitude,
                    longitude: formData.longitude,
                    images: images,
                },
                postDetail: {
                    desc: value,
                    utilities: formData.utilities,
                    pet: formData.pet,
                    income: formData.income,
                    size: parseInt(formData.size),
                    school: parseInt(formData.school),
                    bus: parseInt(formData.bus),
                    restaurant: parseInt(formData.restaurant),
                },
            }, {
                withCredentials: true,
            });

            navigate("/" + res.data._id);
        } catch (err) {
            console.error(err);
            // Check if the error response exists and get the message
            const errorMessage = err.response?.data?.message || "Something went wrong!";
            setError(errorMessage);
        }
    };

    return (
        <div className="container mx-auto flex justify-between items-start md:h-[calc(100vh-6rem)] px-4 mb-10 ">
            {/* Left Side Content */}
            <div className="flex flex-col gap-5 md:w-3/5 md:flex-[3] md:justify-between ">
                <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                    {/* Form Fields */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title">Title</label>
                        <input value={formData.title} onChange={handleInputData} id="title" name="title" type="text" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="price">Price</label>
                        <input value={formData.price} onChange={handleInputData} id="price" name="price" type="number" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="address">Address</label>
                        <input value={formData.address} onChange={handleInputData} id="address" name="address" type="text" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1 md:col-span-3 mb-10">
                        <label htmlFor="description">Description</label>
                        <ReactQuill onChange={setValue} value={value} required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="city">City</label>
                        <input value={formData.city} onChange={handleInputData} id="city" name="city" type="text" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="bedroom">Bedroom Number</label>
                        <input value={formData.bedroom} onChange={handleInputData} min={1} id="bedroom" name="bedroom" type="number" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="bathroom">Bathroom Number</label>
                        <input value={formData.bathroom} onChange={handleInputData} min={1} id="bathroom" name="bathroom" type="number" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="latitude">Latitude</label>
                        <input value={formData.latitude} onChange={handleInputData} id="latitude" name="latitude" type="text" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="longitude">Longitude</label>
                        <input value={formData.longitude} onChange={handleInputData} id="longitude" name="longitude" type="text" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="type">Type</label>
                        <select name="type" onChange={handleInputData} value={formData.type} className="p-4 border border-gray-300 rounded">
                            <option value="rent">Rent</option>
                            <option value="buy">Buy</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="property">Property</label>
                        <select name="property" onChange={handleInputData} value={formData.property} className="p-4 border border-gray-300 rounded">
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                            <option value="land">Land</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="utilities">Utilities Policy</label>
                        <select name="utilities" onChange={handleInputData} value={formData.utilities} className="p-4 border border-gray-300 rounded">
                            <option value="owner">Owner is responsible</option>
                            <option value="tenant">Tenant is responsible</option>
                            <option value="shared">Shared</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="pet">Pet Policy</label>
                        <select name="pet" onChange={handleInputData} value={formData.pet} className="p-4 border border-gray-300 rounded">
                            <option value="allowed">Allowed</option>
                            <option value="not-allowed">Not Allowed</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="income">Income Policy</label>
                        <input value={formData.income} onChange={handleInputData} id="income" name="income" type="text" className="p-4 border border-gray-300 rounded" placeholder="Income Policy" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="size">Total Size (sqft)</label>
                        <input value={formData.size} onChange={handleInputData} min={0} id="size" name="size" type="number" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="school">School</label>
                        <input value={formData.school} onChange={handleInputData} min={0} id="school" name="school" type="number" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="bus">Bus</label>
                        <input value={formData.bus} onChange={handleInputData} min={0} id="bus" name="bus" type="number" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="restaurant">Restaurant</label>
                        <input value={formData.restaurant} onChange={handleInputData} min={0} id="restaurant" name="restaurant" type="number" className="p-4 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <button type="submit" className="w-full rounded border-none bg-teal-600 text-white font-bold cursor-pointer p-4">Add</button>
                    </div>
                    {error && <span className="text-red-500">{error}</span>}
                </form>
            </div>

            {/* Right Side Image */}
            <div className="hidden lg:flex flex-[2] bg-gray-300 h-full relative overflow-visible md:w-2/5 justify-center items-center p-4">
                <div className="flex flex-wrap gap-4 justify-center">
                    {images.map((image, index) => (
                        <img
                            src={image}
                            key={index}
                            alt={`Uploaded image ${index + 1}`}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto rounded-lg border border-gray-400 shadow-lg transition-transform duration-200 transform hover:scale-105"
                        />
                    ))}
                </div>
                <UploadWidget
                    uwConfig={{
                        cloudName: "diyjzdt53",
                        uploadPreset: "estate",
                        multiple: true,
                        maxImageFileSize: 2000000,
                        folder: "posts",
                    }}
                    setState={setImages}
                />
            </div>
        </div>
    );
}

export default NewPostPage;
