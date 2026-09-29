import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { data, updateData } = usePortfolio();
  const [formData, setFormData] = useState(data);
  const [saveStatus, setSaveStatus] = useState('');

  const isAuth = localStorage.getItem('adminAuth');

  useEffect(() => {
    if (!isAuth) {
      navigate('/admin');
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null;
  }

  const handleChange = (section: keyof typeof data, field: string, value: any, index?: number) => {
    setFormData(prev => {
      const newData = { ...prev };
      if (index !== undefined && Array.isArray(newData[section][field as keyof (typeof newData)[typeof section]])) {
        const arr = [...(newData[section][field as keyof (typeof newData)[typeof section]] as any[])];
        arr[index] = value;
        (newData[section] as any)[field] = arr;
      } else {
        (newData[section] as any)[field] = value;
      }
      return newData;
    });
  };

  const handleNestedArrayChange = (section: keyof typeof data, field: string, index: number, nestedField: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      const arr = [...(newData[section][field as keyof (typeof newData)[typeof section]] as any[])];
      arr[index] = { ...arr[index], [nestedField]: value };
      (newData[section] as any)[field] = arr;
      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateData(formData);
    setSaveStatus('Changes saved successfully!');
    setTimeout(() => setSaveStatus(''), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#D4AF37]">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
          >
            Logout
          </button>
        </div>

        {saveStatus && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl sticky top-4 z-50">
            {saveStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Hero Section */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-[#00BFFF]">Hero Section (Home)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/60 mb-2">First Name</label>
                <input 
                  type="text" 
                  value={formData.hero.name}
                  onChange={(e) => handleChange('hero', 'name', e.target.value)}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Last Name</label>
                <input 
                  type="text" 
                  value={formData.hero.lastName}
                  onChange={(e) => handleChange('hero', 'lastName', e.target.value)}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-white/60 mb-2">Role</label>
                <input 
                  type="text" 
                  value={formData.hero.role}
                  onChange={(e) => handleChange('hero', 'role', e.target.value)}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-white/60 mb-2">Description</label>
                <textarea 
                  value={formData.hero.description}
                  onChange={(e) => handleChange('hero', 'description', e.target.value)}
                  rows={3}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
            </div>
          </div>

          {/* Professional Profile Section (Home Page) */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-[#00BFFF]">Professional Profile Section (Home Page)</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/60 mb-2">Title</label>
                <input 
                  type="text" 
                  value={formData.about.title}
                  onChange={(e) => handleChange('about', 'title', e.target.value)}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Name</label>
                <input 
                  type="text" 
                  value={formData.about.name}
                  onChange={(e) => handleChange('about', 'name', e.target.value)}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Role</label>
                <input 
                  type="text" 
                  value={formData.about.role}
                  onChange={(e) => handleChange('about', 'role', e.target.value)}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
              {formData.about.paragraphs.map((p, index) => (
                <div key={index}>
                  <label className="block text-sm text-white/60 mb-2">Paragraph {index + 1}</label>
                  <textarea 
                    value={p}
                    onChange={(e) => handleChange('about', 'paragraphs', e.target.value, index)}
                    rows={4}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-xl font-semibold mb-6 text-[#00BFFF]">Education Section</h2>
            
            <div className="space-y-8">
              {/* Degrees */}
              <div>
                <h3 className="text-lg text-[#D4AF37] mb-4">Degrees</h3>
                {formData.education?.degrees.map((deg, i) => (
                  <div key={i} className="mb-6 p-4 border border-white/10 rounded-xl bg-black/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/60 mb-1">Title</label>
                        <input 
                          type="text" 
                          value={deg.title}
                          onChange={(e) => handleNestedArrayChange('education', 'degrees', i, 'title', e.target.value)}
                          className="w-full p-2 bg-black/40 border border-white/20 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/60 mb-1">Institution</label>
                        <input 
                          type="text" 
                          value={deg.institution}
                          onChange={(e) => handleNestedArrayChange('education', 'degrees', i, 'institution', e.target.value)}
                          className="w-full p-2 bg-black/40 border border-white/20 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/60 mb-1">Years</label>
                        <input 
                          type="text" 
                          value={deg.years}
                          onChange={(e) => handleNestedArrayChange('education', 'degrees', i, 'years', e.target.value)}
                          className="w-full p-2 bg-black/40 border border-white/20 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/60 mb-1">Score Label (e.g., CGPA: 8.5/10)</label>
                        <input 
                          type="text" 
                          value={deg.scoreLabel}
                          onChange={(e) => handleNestedArrayChange('education', 'degrees', i, 'scoreLabel', e.target.value)}
                          className="w-full p-2 bg-black/40 border border-white/20 rounded text-sm text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-lg text-[#D4AF37] mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {formData.education?.certifications.map((cert, i) => (
                    <div key={i} className="p-3 border border-white/10 rounded-xl bg-black/20 text-sm">
                      <input 
                        type="text" 
                        value={cert.title}
                        onChange={(e) => handleNestedArrayChange('education', 'certifications', i, 'title', e.target.value)}
                        placeholder="Title"
                        className="w-full mb-2 p-1.5 bg-black/40 border border-white/20 rounded"
                      />
                      <input 
                        type="text" 
                        value={cert.issuer}
                        onChange={(e) => handleNestedArrayChange('education', 'certifications', i, 'issuer', e.target.value)}
                        placeholder="Issuer"
                        className="w-full mb-2 p-1.5 bg-black/40 border border-white/20 rounded"
                      />
                      <input 
                        type="text" 
                        value={cert.year}
                        onChange={(e) => handleNestedArrayChange('education', 'certifications', i, 'year', e.target.value)}
                        placeholder="Year"
                        className="w-full p-1.5 bg-black/40 border border-white/20 rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h3 className="text-lg text-[#D4AF37] mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.education?.stats.map((stat, i) => (
                    <div key={i} className="p-3 border border-white/10 rounded-xl bg-black/20 text-sm">
                      <input 
                        type="text" 
                        value={stat.value}
                        onChange={(e) => handleNestedArrayChange('education', 'stats', i, 'value', e.target.value)}
                        placeholder="Value (e.g. 10+)"
                        className="w-full mb-2 p-1.5 bg-black/40 border border-white/20 rounded font-bold text-[#00BFFF]"
                      />
                      <input 
                        type="text" 
                        value={stat.label}
                        onChange={(e) => handleNestedArrayChange('education', 'stats', i, 'label', e.target.value)}
                        placeholder="Label"
                        className="w-full p-1.5 bg-black/40 border border-white/20 rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Section */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-[#00BFFF]">Business Strategy Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/60 mb-2">Strategy Description</label>
                <textarea 
                  value={formData.strategy?.description || ''}
                  onChange={(e) => handleChange('strategy', 'description', e.target.value)}
                  rows={3}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Skills</label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {formData.strategy?.skills?.map((skill, index) => (
                    <input 
                      key={`strategy-skill-${index}`}
                      type="text" 
                      value={skill}
                      onChange={(e) => handleChange('strategy', 'skills', e.target.value, index)}
                      className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white text-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Page Section */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-[#00BFFF]">Full About Page Content</h2>
            <div className="space-y-4">
              {formData.aboutPage?.paragraphs.map((p, index) => (
                <div key={`about-page-${index}`}>
                  <label className="block text-sm text-white/60 mb-2">Paragraph {index + 1}</label>
                  <textarea 
                    value={p}
                    onChange={(e) => handleChange('aboutPage', 'paragraphs', e.target.value, index)}
                    rows={4}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#e8c148] text-black font-bold rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider sticky bottom-4 z-50 shadow-2xl"
          >
            Save All Changes
          </button>
        </form>
      </div>
    </div>
  );
}
