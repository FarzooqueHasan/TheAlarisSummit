import React, { useState } from 'react';

const SCHEDULE_DATA = {
  day1: {
    title: 'Day I · Inaugural & Plenary',
    date: 'Day I Protocol',
    events: []
  },
  day2: {
    title: 'Day II · Resolution & Valedictory',
    date: 'Day II Protocol',
    events: []
  }
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section id="schedule" className="schedule-section" aria-label="Conference Itinerary">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Conference Itinerary</div>
          <h2 className="section-title">Two Days of Protocol</h2>
          <p className="section-subtitle">
            A meticulously planned timetable balancing parliamentary rigor, real-time crisis scenarios, and elite networking.
          </p>
        </div>

        {/* Day Selection Tabs */}
        <div className="day-tabs" role="tablist" aria-label="Select conference day">
          <div 
            className={`day-tab ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
            role="tab"
            aria-selected={activeDay === 'day1'}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActiveDay('day1')}
          >
            <div className="day-tab-title">Day I</div>
            <div className="day-tab-date">Day I Protocol</div>
          </div>

          <div 
            className={`day-tab ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
            role="tab"
            aria-selected={activeDay === 'day2'}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActiveDay('day2')}
          >
            <div className="day-tab-title">Day II</div>
            <div className="day-tab-date">Day II Protocol</div>
          </div>
        </div>

        {/* Timeline Events List Structure */}
        <div className="timeline-list">
          {SCHEDULE_DATA[activeDay]?.events && SCHEDULE_DATA[activeDay].events.length > 0 ? (
            SCHEDULE_DATA[activeDay].events.map((event, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-time">{event.time}</div>
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="glass-card timeline-content">
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-desc">{event.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="schedule-placeholder-container" style={{ padding: '2.5rem 0', textAlign: 'center' }}>
              <div className="glass-card" style={{ maxWidth: '520px', margin: '0 auto', padding: '2rem 1.5rem', border: '1px dashed var(--border-subtle)' }}>
                <span style={{ color: 'var(--color-periwinkle-light)', fontSize: '1.25rem', display: 'block', marginBottom: '0.5rem' }}>✦</span>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  {SCHEDULE_DATA[activeDay].title}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
                  Detailed session timings and protocols will be released prior to conference commencement.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
