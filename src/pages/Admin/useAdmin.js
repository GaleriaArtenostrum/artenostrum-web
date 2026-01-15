import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';

export const useAdmin = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar sesión actual
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) navigate('/');
            else setUser(session.user);
        };
        getSession();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };

    return { user, handleLogout };
};