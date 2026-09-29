import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await response.json();
      
      if (response.ok && data.success) {
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard');
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('Login failed. (Are you running via Vercel CLI locally?)');
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A] flex items-center justify-center text-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#D4AF37] mb-2">Admin Access</h1>
          <p className="text-white/60 text-sm">Enter your password to manage portfolio content</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full px-5 py-4 bg-black/40 border border-white/20 rounded-xl outline-none focus:border-[#00BFFF] transition-colors text-white"
            />
          </div>
          
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          
          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#00BFFF] to-[#37D5FF] text-black font-bold rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider text-sm"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
