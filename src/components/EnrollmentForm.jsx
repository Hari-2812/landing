import React, { useState, useEffect } from 'react';
import { useForm as useRHForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Lock } from 'lucide-react';

const SOCKET_URL = 'http://localhost:5000'; 

export default function EnrollmentForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(12);
  
  const { register, handleSubmit, formState: { isValid }, watch } = useRHForm({ mode: 'onChange' });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft((prev) => prev <= 4 ? 4 : prev - 1);
    }, 4500); 
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${SOCKET_URL}/api/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) setIsSuccess(true);
    } catch (error) {
      console.error('Enrollment failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nameValue = watch('name');
  // Live Game Progress Logic
  const roleChosen = watch('targetRole');
  let gamePercent = 10;
  let gameStatus = "Applicant";
  
  if (nameValue?.length > 2) {
    gamePercent = 35;
    gameStatus = "Initiate";
  }
  if (step === 2) {
    gamePercent = roleChosen ? 65 : 50;
    gameStatus = "Trajectory Set";
  }
  if (step === 3) {
    gamePercent = isValid ? 95 : 80;
    gameStatus = "Systems Ready";
  }
  if (isSuccess) {
    gamePercent = 100;
    gameStatus = "Data Professional";
  }

  return (
    <section className="py-24 relative overflow-hidden bg-midnight" id="enroll">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-pulse/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
        
        <h2 className="heading-hero mb-10 leading-tight">
          Stop Hesitating. <br />
          <span className="text-gradient-purple">Your Transformation Begins Here.</span>
        </h2>
        
        <div className="glass-card-premium p-8 md:p-12 shadow-2xl relative bg-black/60 text-left overflow-hidden border-indigo-pulse/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-pulse/20 blur-[60px]"></div>

          <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" /> Secure Protocol
            </h3>
            <div className="text-right">
              <span className="tag-label text-gray-500 block mb-1">Status</span>
              <span className="text-lg font-bold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                Only {seatsLeft} Seats Remaining
              </span>
            </div>
          </div>

          {/* Gamified Live Roadmap Tracker */}
          <div className="mb-10 relative bg-black/40 p-5 rounded-2xl border border-white/5">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
               <span>Applicant</span>
               <span className="text-cyan-neon drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]">{gameStatus}</span>
            </div>
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden relative shadow-inner">
              <motion.div 
                animate={{ width: `${gamePercent}%` }}
                transition={{ type: "spring", stiffness: 45, damping: 15 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-punch to-cyan-neon"
              >
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/30 blur-[4px] animate-pulse"></div>
              </motion.div>
            </div>
          </div>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="heading-section text-white">Pipeline Secured!</h3>
              <p className="subheading text-lg">You are now legally registered. Check your encrypted channel (inbox) for setup instructions.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="relative mb-6">
                      <input 
                        {...register('name', { required: true })} 
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-6 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-indigo-pulse focus:ring-2 focus:ring-indigo-pulse/50 transition-all font-medium shadow-inner"
                        placeholder="Your Legal Name"
                      />
                    </div>
                    <button 
                      type="button" 
                      onClick={() => { if(watch('name')?.length > 1) setStep(2); }}
                      className="btn-primary flex justify-center w-full shadow-glow-indigo disabled:opacity-50 disabled:shadow-none"
                      disabled={watch('name')?.length < 2}
                    >
                      Initialize Stack
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      {['Data Analyst', 'Data Scientist', 'BI Engineer'].map((role) => (
                        <label key={role} className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/5 cursor-pointer transition-all has-[:checked]:border-cyan-neon has-[:checked]:bg-cyan-neon/10">
                          <input 
                            type="radio" value={role} {...register('targetRole', { required: true })} 
                            className="w-5 h-5 accent-cyan-neon"
                          />
                          <span className="font-bold text-white text-lg">{role}</span>
                        </label>
                      ))}
                    </div>
                    <button 
                      type="button" 
                      onClick={() => { if(watch('targetRole')) setStep(3); }}
                      className="btn-primary flex justify-center w-full !border-cyan-neon/30 shadow-glow-cyan disabled:opacity-50 disabled:shadow-none bg-midnight"
                      disabled={!watch('targetRole')}
                    >
                      Confirm Framework
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="relative mb-6">
                      <input 
                        type="email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-6 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-purple-punch focus:ring-2 focus:ring-purple-punch/50 transition-all font-medium shadow-inner"
                        placeholder="Professional Email Account"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting || !isValid}
                      className="btn-primary flex justify-center w-full !border-purple-punch/30 shadow-glow-purple disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Claim Trajectory & Deploy'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
