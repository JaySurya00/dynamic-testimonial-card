import { useState } from "react";
import Card from "./card";

const TestimonialForm = () => {
    const [testimonies, setTestimonies] = useState([]);
    const [imgUrl, setImgUrl] = useState(null);
    const [userName, setUserName] = useState("");
    const [testimony, setTestimony] = useState("");

    const handleImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgUrl(reader.result); // Store temporary preview URL
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTestimony = { imgUrl, userName, testimony };
        console.log(newTestimony);
        setTestimonies([...testimonies, newTestimony]);
        setImgUrl(null);
        setUserName("");
        setTestimony("");
    };

    return (
        <div className="p-4 mx-auto mt-8">
            <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg">
                <label htmlFor="avatar" className="block font-semibold">Avatar</label>
                <input type="file" id="avatar" accept="image/*" onChange={handleImg} className="block w-full border p-2" />

                {imgUrl && <img src={imgUrl} alt="Preview" className="w-16 h-16 rounded-full mt-2" />}

                <label htmlFor="name" className="block font-semibold">Name</label>
                <input
                    type="text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="border w-full p-2"
                    required
                />

                <label htmlFor="testimony" className="block font-semibold">Testimony</label>
                <textarea
                    id="testimony"
                    value={testimony}
                    onChange={(e) => setTestimony(e.target.value)}
                    className="border w-full p-2"
                    required
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
            <div className="mt-8 flex gap-4">
                {
                    testimonies.map(({ imgUrl, userName, testimony }, indx) => <Card key={indx} imgUrl={imgUrl} userName={userName} testimony={testimony} />)
                }
            </div>
        </div>
    );
};

export default TestimonialForm;
