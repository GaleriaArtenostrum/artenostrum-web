import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({ 
        email,
        options: {
            // Esto le dice a Supabase a dónde enviar al usuario tras el clic
            emailRedirectTo: 'http://localhost:3000/admin' 
        }
    });
  };

  return { email, setEmail, loading, handleLogin };
};