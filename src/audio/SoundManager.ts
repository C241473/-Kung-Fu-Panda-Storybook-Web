// Web Audio API Sound Synthesizer for Oriental Flute, Gongs & Effects
class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientInterval: number | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.ambientInterval) {
      window.clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
    return this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  // Play martial arts Gong sound
  public playGong() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, this.ctx.currentTime); // Low A note
      osc.frequency.exponentialRampToValueAtTime(55, this.ctx.currentTime + 2.5);

      gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 3.0);
    } catch {
      // Audio context fallbacks
    }
  }

  // Chopstick catch click sound
  public playChopstickClick() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // Audio context fallbacks
    }
  }

  // Wuxi Finger Hold "SKADOOSH" Energy Blast Sound
  public playWuxiBlast() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      // Low frequency rumble rise
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(40, this.ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 1.2);

      gain1.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain1.gain.linearRampToValueAtTime(0.5, this.ctx.currentTime + 1.0);
      gain1.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2.5);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start();
      osc1.stop(this.ctx.currentTime + 2.6);

      // High resonance golden chime
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, this.ctx.currentTime + 1.0);
      osc2.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 1.5);

      gain2.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain2.gain.setValueAtTime(0.4, this.ctx.currentTime + 1.0);
      gain2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 3.0);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(this.ctx.currentTime + 0.9);
      osc2.stop(this.ctx.currentTime + 3.1);
    } catch {
      // Audio context fallbacks
    }
  }

  // Bamboo Flute ambient note generator
  public playFluteNote(freq: number = 440) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      // Soft vibrato effect
      osc.frequency.linearRampToValueAtTime(freq * 1.01, this.ctx.currentTime + 0.5);
      osc.frequency.linearRampToValueAtTime(freq, this.ctx.currentTime + 1.0);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 2.3);
    } catch {
      // Audio fallback
    }
  }

  // Start background zen audio loop (Pentatonic melody)
  public startAmbientSoundscape() {
    if (this.ambientInterval) return;
    const pentatonicScale = [293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25]; // D minor pentatonic
    this.ambientInterval = window.setInterval(() => {
      if (!this.isMuted) {
        const randomNote = pentatonicScale[Math.floor(Math.random() * pentatonicScale.length)];
        this.playFluteNote(randomNote);
      }
    }, 3500);
  }
}

export const soundManager = new SoundManager();
