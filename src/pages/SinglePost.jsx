import axios from "axios";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import PostCard from "../components/PostCard";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

export default function(){

    const { slug } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        setPost(null);
        const url = `${apiUrl}/posts/${slug}`;
        axios.get(url)
            .then(({data}) => setPost(data.post))
    },[slug]); 
    const p = post;

    return(<>
        {p === null ? <span>loading</span> :
            
            <PostCard
                image={p.image}
                title={p.title}
                content={p.content}
                tags={p.tags.map(i => i.name)}
                published={p.published}
            />
        }
    </>)
}