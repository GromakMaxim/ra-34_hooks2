import {useEffect, useState} from "react";

export default function useJsonFetch(url, vars) {
    const [selectedProfile, setProfile] = useState({
        data: '',
        loading: 'loading..',
        error: '',

    }); // выбранный профиль

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url);

            if (response.ok) {
                let json = await response.json();

                let obj = {
                    data: json,
                    loading: '',
                    error: ''
                }
                setProfile(obj);
            } else if (!response.ok) {
                let obj = {
                    data: '',
                    loading: '',
                    error: response.status.toString(),
                }
                setProfile(obj);
            } else {
                let obj = {
                    data: '',
                    loading: response.status.toString(),
                    error: ''
                }
                setProfile(obj);
            }

        };

        fetchData();

    }, []);
    return selectedProfile;
}
