import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Christine May T. Dantes';
  location = 'Angeles City, Pampanga';
  email = 'christinedantes1604@gmail.com';
  phone = '0961 985 5459';

  profile = 'I am an Information Technology student specializing in Web Development with a passion for design, creativity, and digital innovation. I focus on UI/UX design, website and mobile application interfaces, graphic design, and video editing. I enjoy creating visually appealing and user-friendly designs while continuously improving my skills.';

  skills = [
    'UI/UX Design',
    'Website Design',
    'Content Creation',
    'Capcut',
    'Figma',
    'IbisPaint',
    'Video Editing',
    'Multitasking',
    'Time Management',
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
