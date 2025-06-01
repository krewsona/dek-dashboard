import { useState } from 'react';
import './StatForm.css';
import { useNavigate } from 'react-router-dom';

function StatForm({ onAddStat }) {
  const [formData, setFormData] = useState({
    team: '',
    goals: '',
    assists: '',
    date: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.team || !formData.goals || !formData.assists || !formData.date) {
      return alert('Please fill in all fields');
    }

    setLoading(true);

    
    setTimeout(() => {
      onAddStat(formData);
      setFormData({ team: '', goals: '', assists: '', date: '' });
      setLoading(false);
      navigate('/');
    }, 1000); 
  };

  return (
    <form className="stat-form" onSubmit={handleSubmit}>
      <input type="text" name="team" placeholder="Team" value={formData.team} onChange={handleChange} required />
      <input type="number" name="goals" placeholder="Goals" value={formData.goals} onChange={handleChange} required />
      <input type="number" name="assists" placeholder="Assists" value={formData.assists} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <button type="submit" disabled={loading}>
        {loading ? <span className="spinner"></span> : 'Add Stat'}
      </button>
    </form>
  );
}

export default StatForm;
