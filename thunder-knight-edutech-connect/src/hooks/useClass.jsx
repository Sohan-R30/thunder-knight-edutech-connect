import { useQuery } from "@tanstack/react-query";


const useclassName = () => {

    const { data: classNamees = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classNamees'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-lilac.vercel.app/className');
            return res.json();
        }

    })
    return [classNamees, loading, refetch]
}

export default useclassName;