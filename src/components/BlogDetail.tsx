import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, User, Calendar, Tag, X, ArrowLeft, Share2, Bookmark, Eye, Heart, MessageCircle } from 'lucide-react';
import { submitEmailToGoogleSheets } from '../services/googleSheetsService';
import BlogHeader from './BlogHeader';
import Footer from './Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  views?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Get a Daily Summary of Any WhatsApp Chat in Under 60 Seconds',
    excerpt: 'Transform your morning chaos of 347 unread messages into a perfect summary in less time than it takes to brew coffee.',
    content: `
      <h2>Sound familiar?</h2>
      
      <p>You wake up, grab your phone, and there it is. The little green icon with a number that makes your heart sink just a little: <strong>347 unread messages</strong>.</p>
      
      <p>They're spread across the project group, the client feedback chat, and that "urgent" team announcements group. You know there are probably two or three critical pieces of information buried in there, but finding them feels like a treasure hunt where the prize is just… being caught up.</p>
      
      <p>So you start scrolling.</p>
      
      <p>You scroll past jokes, you scroll past off-topic discussions, you scroll past a 30-message debate about lunch. Ten minutes later, you think you have the gist of it. But do you? Are you sure you didn't miss that one message about a deadline being moved?</p>
      
      <p>This little morning ritual doesn't just waste time. It drains your mental energy before the day has even properly begun. You're starting from a place of "catching up" instead of "moving forward."</p>
      
      <p>What if you could change that? What if you could get all the critical information from those 347 messages, perfectly summarized, in less time than it takes to brew your coffee?</p>
      
      <p>It's not a fantasy. It's about working smarter, not scrolling harder.</p>
      
      <h2>The Problem with Manual Catch-Ups</h2>
      
      <p>Let's be honest, the "manual catch-up" is broken. Our brains aren't designed to process hundreds of disjointed messages and assemble them into a coherent story.</p>
      
      <p>Here's what we're really doing when we scroll:</p>
      
      <ul>
        <li><strong>Filtering Noise:</strong> We're trying to separate important updates from casual chatter. This is mentally taxing.</li>
        <li><strong>Connecting Dots:</strong> We have to piece together a conversation that happened over several hours. "Wait, what was Sarah replying to? Oh, it was that message from yesterday."</li>
        <li><strong>Searching Blindly:</strong> The native search function in WhatsApp is okay for finding a specific word, but it's terrible for finding context. Searching for "budget" will show you every time the word was mentioned, but not the final decision that was made about it.</li>
      </ul>
      
      <p>This process is slow, inaccurate, and stressful. There has to be a better way.</p>
      
      <h2>The 60-Second Solution: Your Personal AI Briefing</h2>
      
      <p>Imagine having a personal assistant.</p>
      
      <p>Every morning, they read all your group chats for you. They ignore the fluff and pull out only the most important points. Then, they hand you a neat, one-page report with everything you need to know.</p>
      
      <p>That's exactly what an AI-powered chat summarizer does. It acts as your personal assistant, giving you a daily briefing in seconds.</p>
      
      <p>And you can set this up right now. Here's how you can get a perfect summary of any WhatsApp chat, every single day, in under a minute.</p>
      
      <h2>Your Step-by-Step Guide to Instant Summaries</h2>
      
      <p>This process uses a smart tool that lives in your browser, working directly with WhatsApp Web. It's safe, private, and incredibly fast.</p>
      
      <p><strong>Step 1: Add the Right Tool to Your Browser</strong></p>
      
      <p>First things first, you need an AI assistant. The best tools for this are Chrome Extensions, as they can interact with WhatsApp Web without ever storing your data. We're going to use an extension specifically built for this job.</p>
      
      <p>Go to the Chrome Web Store and search for a chat summarizer. A great one to start with is designed to do exactly this.</p>
      
      <p><strong>Step 2: Open WhatsApp Web and Connect</strong></p>
      
      <p>Once the extension is installed, open WhatsApp Web on your computer like you normally would. You'll see a new icon or panel appear for your new AI assistant. You'll do a quick one-time setup, usually just with an email, to create your secure account.</p>
      
      <p><strong>Step 3: Choose Your Groups and Date Range</strong></p>
      
      <p>This is where the magic starts. Instead of opening each group one by one, you can now select multiple groups at once from the extension's panel.</p>
      
      <p>Want a summary of your three most important work groups? Just check the boxes next to their names.</p>
      
      <p>Next, you'll specify the date range. For a daily summary, you'll simply select "Last 24 hours."</p>
      
      <p><strong>Step 4: Click the "Summarize" Button</strong></p>
      
      <p>This is the most satisfying step. You click one button.</p>
      
      <p>The tool will instantly read the conversations from the groups you selected for the time frame you chose. It does this securely within your browser. Your conversations are never sent anywhere or saved.</p>
      
      <p><strong>Step 5: Get Your Perfect Summary</strong></p>
      
      <p>In about 30 to 60 seconds, a clear, concise summary will appear. It won't be a random collection of messages. A good AI will organize it intelligently, often under headings like:</p>
      
      <ul>
        <li><strong>Key Decisions:</strong> "The team decided to move forward with Design B."</li>
        <li><strong>Action Items:</strong> "Action: Sarah to send the final report to the client by EOD."</li>
        <li><strong>Main Topics:</strong> "A discussion was held about the Q3 marketing budget."</li>
        <li><strong>Questions:</strong> "Michael asked if the deadline could be extended."</li>
      </ul>
      
      <p>That's it. You've just digested hundreds of messages and extracted all the value from them in under a minute.</p>
      
      <p>You can now walk into your day fully informed, focused, and with an extra 15-20 minutes of your life back. Every single day.</p>
      
      <h2>Your Morning, Reimagined</h2>
      
      <p>Think about what this means.</p>
      
      <p>No more morning dread. No more endless scrolling. No more fear of missing out.</p>
      
      <p>You can finally use WhatsApp for what it was meant for: quick communication. You can let your AI assistant handle the job of being a full-time chat librarian.</p>
      
      <p>It's really that fast. You can spend more time making decisions and less time looking for the information you need to make them.</p>
      
      <p>Ready to get your first summary in the next minute? It's time to stop scrolling and start understanding. Find a WhatsApp chat extractor on the Chrome Web Store and reclaim your morning.</p>
    `,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Productivity',
    gradient: 'from-purple-500 to-pink-500',
    views: '2.4k'
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Automating Your Daily Information Gathering on WhatsApp',
    excerpt: 'Stop typing the same questions every day. Build a personal intelligence system that works with one click.',
    content: `
      <p>We automate everything these days.</p>
      
      <p>We automate our bill payments. We automate our calendar reminders. We automate our coffee makers. We do it because automation frees up our time and mental energy for more important things.</p>
      
      <p>So why are we still manually gathering information from WhatsApp every single day?</p>
      
      <p>Think about it. How many times this week have you typed some version of the same question into a group chat?</p>
      
      <ul>
        <li>"Any updates on the new client?"</li>
        <li>"What stocks are trending today?"</li>
        <li>"Did anyone report any urgent bugs?"</li>
        <li>"What are my action items from yesterday's chat?"</li>
      </ul>
      
      <p>Each time you do this, you're performing a manual, repetitive chore. You type the question, wait for responses, and scroll through conversations to piece together an answer. This isn't just work; it's a drag on your productivity.</p>
      
      <p>What if you could build a personal intelligence system that answers these questions for you, every single day, with a single click?</p>
      
      <p>Welcome to the world of automated information gathering.</p>
      
      <h2>From Manual Questions to Automated Insights</h2>
      
      <p>The key to automation is turning your recurring questions into a system that works for you. In the world of AI, these saved questions are called "prompts."</p>
      
      <p>A prompt is simply a specific instruction you give to an AI. But a reusable prompt is where the magic happens. It's a saved instruction you can run again and again on new data.</p>
      
      <p>Imagine having a dashboard of buttons for your WhatsApp chats. Each button is one of your recurring questions:</p>
      
      <ul>
        <li>A button labeled "Daily Project Blockers."</li>
        <li>A button labeled "Trending Market Topics."</li>
        <li>A button labeled "New Sales Leads."</li>
      </ul>
      
      <p>Instead of typing, you just click. And instantly, you get a fresh, AI-generated report based on the latest conversations. This isn't science fiction; it's what's possible right now with the right tools.</p>
      
      <h2>Building Your Personal Automation Dashboard</h2>
      
      <p>Creating this system is surprisingly simple. It involves a one-time setup to teach your AI assistant what you care about. From then on, it's just one click a day.</p>
      
      <p>Here's how to build your automated information-gathering system for WhatsApp.</p>
      
      <p><strong>Step 1: Identify Your Recurring Questions</strong></p>
      
      <p>First, take five minutes to think about the information you look for every single day. Be specific.</p>
      
      <ul>
        <li><strong>If you're a Project Manager:</strong> "List all action items assigned to me." or "Summarize any reported project risks or blockers."</li>
        <li><strong>If you're a Stock Trader:</strong> "Which stocks were mentioned with positive sentiment?" or "Summarize discussions about cryptocurrency."</li>
        <li><strong>If you're a Sales Manager:</strong> "Extract all new client names and their needs." or "Summarize feedback on our latest product demo."</li>
        <li><strong>If you're a Community Manager:</strong> "Find all unresolved member questions from the last 24 hours."</li>
      </ul>
      
      <p>Write these down. These are the foundations of your automated system.</p>
      
      <p><strong>Step 2: Choose a Tool with Reusable Prompts</strong></p>
      
      <p>You need a tool that can not only summarize chats but also save your custom questions. Look for a WhatsApp Web Chrome Extension that specifically advertises "reusable prompts" or "custom queries." This is the key feature that unlocks automation.</p>
      
      <p>These tools work securely in your browser, ensuring your data remains private while giving you this powerful functionality.</p>
      
      <p><strong>Step 3: Create and Save Your First Prompt</strong></p>
      
      <p>Once you have the tool installed, you'll find a section for managing your prompts. The process will look something like this:</p>
      
      <ol>
        <li><strong>Open the Prompt Manager:</strong> In the extension's panel, find a button like "My Prompts" or "Custom Prompts."</li>
        <li><strong>Create a New Prompt:</strong> Click "Add New" or a similar button.</li>
        <li><strong>Give It a Name:</strong> This is your button label. Make it clear and concise, like "Daily Action Items."</li>
        <li><strong>Write the Instruction:</strong> This is where you type in the question you identified in Step 1. For example: "Scan the chat and list all sentences that are action items or tasks. Make sure to include who is assigned to each task."</li>
        <li><strong>Save It:</strong> Click save. That's it. You've just created your first automated information-gathering button.</li>
      </ol>
      
      <p>Repeat this for your other recurring questions. In ten minutes, you can have a full dashboard of custom queries ready to go.</p>
      
      <h2>Your New One-Click Daily Workflow</h2>
      
      <p>Now, let's look at your new daily routine.</p>
      
      <ol>
        <li>Open WhatsApp Web.</li>
        <li>Click the "Sync" button in your extension to pull in the latest messages.</li>
        <li>Open your prompts dashboard.</li>
        <li>Click your "Daily Action Items" button.</li>
        <li>Instantly, you get a clean, bulleted list of everything you need to do.</li>
      </ol>
      
      <p>No more typing. No more scrolling. No more searching. Just one click, and you have pure, actionable intelligence.</p>
      
      <h2>The Power of Compounding Time</h2>
      
      <p>This is about more than just saving a few minutes. It's about the power of compounding.</p>
      
      <p>The five minutes you save today becomes 25 minutes this week. That's nearly two hours next month, and a full 24 hours—a whole day—over the course of a year. That's a full day of your life you get back, just from automating one small task.</p>
      
      <p>Now imagine automating three or four of your daily queries.</p>
      
      <p>You stop being a data gatherer and start being a decision-maker. You can focus your valuable brainpower on strategy, creativity, and execution, not on the manual labor of finding information.</p>
      
      <p>Stop the daily grind. Start automating your intelligence today. Look for a WhatsApp tool with reusable prompts and build the system that works for you, so you don't have to.</p>
    `,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Michael Chen',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Automation',
    gradient: 'from-blue-500 to-cyan-500',
    views: '1.8k'
  },
  {
    id: '3',
    title: 'From 500+ Unread Messages to a 3-Bullet Summary: A Real-Life Transformation',
    excerpt: 'Meet Sarah, who transformed her chaotic Monday mornings from 35 minutes of scrolling to 2 minutes of clarity.',
    content: `
      <p>It's 8:00 AM on a Monday. For Sarah, a project manager, this used to be the most stressful time of her week.</p>
      
      <p>She'd open her laptop, and her heart would sink. WhatsApp Web would load, revealing a sea of green circles.</p>
      
      <ul>
        <li><strong>Developers Group:</strong> 184 unread messages.</li>
        <li><strong>Marketing & Sales Chat:</strong> 251 unread messages.</li>
        <li><strong>Main Client Group:</strong> 92 unread messages.</li>
      </ul>
      
      <p>Over 500 messages stood between her and a clear understanding of where her projects stood. And so began the "Great Scroll."</p>
      
      <h2>The "Before": A Morning Lost to Chaos</h2>
      
      <p>Sarah's old routine was a frantic battle for information.</p>
      
      <p>First, the developer group. She'd scroll up, trying to find the signal in the noise. She'd pass by weekend memes, a debate about a new sci-fi show, and dozens of "ok" and "got it" replies. Her goal was to find the status of a critical bug fix. After ten minutes of careful scanning, she found it: a single message from a developer at 11 PM on Saturday saying it was "done." Relief. But that was ten minutes gone.</p>
      
      <p>Next, the marketing chat. This one was even worse. It was a fast-moving river of ideas, feedback, and links. She needed to know if a decision was made on the new campaign slogan. She used the search function for "slogan," but it brought up 50 different messages. She had to read them all to piece together the narrative. Another fifteen minutes vanished.</p>
      
      <p>Finally, the client group. She had to read every single message here. Missing a client concern wasn't an option. The conversation was mostly positive, but it took a full ten minutes of focused reading to be sure.</p>
      
      <p>By 8:35 AM, Sarah was finally "caught up." She was also drained, a little stressed, and already felt like she was behind. She had spent <strong>35 minutes</strong> just trying to get to the starting line.</p>
      
      <p>This was her reality, every single week.</p>
      
      <h2>The Turning Point: "There Has to Be a Better Way"</h2>
      
      <p>One Monday, after a particularly chaotic morning, Sarah had enough. She typed a desperate search into Google: "How to manage too many WhatsApp messages."</p>
      
      <p>She scrolled past articles about muting chats and archiving conversations—tips she already knew that didn't solve the core problem. Then she saw something different. A link to a tool. A Chrome Extension that promised to use AI to summarize chats.</p>
      
      <p>She was skeptical. It sounded too good to be true. "AI reading my chats? Is that even safe?" she wondered. But the website talked about a "zero data retention" policy and "local processing." Desperate for a solution, she decided to give it a try.</p>
      
      <h2>The "After": A Morning of Calm and Clarity</h2>
      
      <p>The next Monday, Sarah tried something new.</p>
      
      <p>It's 8:00 AM. She opens her laptop and WhatsApp Web. The 500+ messages are still there, but this time, she ignores them.</p>
      
      <p>Instead, she clicks on the new icon in her browser's toolbar. A clean little panel opens up next to her chats.</p>
      
      <ol>
        <li>She checks the boxes next to her three key groups: Developers, Marketing, and the Client chat.</li>
        <li>She selects the date range: "Since Friday."</li>
        <li>She clicks one button: "Summarize."</li>
      </ol>
      
      <p>She takes a sip of her coffee and watches as the tool works. There's no frantic scrolling. Just a quiet loading icon.</p>
      
      <p>Less than a minute later, a report appears in the panel. It's not a jumble of messages. It's a perfectly organized, three-bullet summary.</p>
      
      <ul>
        <li><strong>Projects Update:</strong> The critical bug was fixed Saturday night. Deployment is ready. A final decision on the new campaign slogan is needed by EOD today.</li>
        <li><strong>Client Status:</strong> The client expressed satisfaction with last week's progress and has no outstanding concerns.</li>
        <li><strong>Action Items:</strong> Your only action item is to confirm the deployment time with the dev team.</li>
      </ul>
      
      <p>Sarah read the entire summary in 20 seconds. She blinked.</p>
      
      <p>All the vital information from over 500 messages, distilled into three simple, actionable points. The noise was gone. All that was left was the signal.</p>
      
      <p>It was 8:02 AM. Her work for the day hadn't even started, but she already felt more in control than ever before. The 35 minutes of stressful scrolling had been replaced by <strong>2 minutes</strong> of calm, focused insight.</p>
      
      <h2>This Isn't Magic. It's Smarter Technology.</h2>
      
      <p>Sarah's story isn't unique. It's the reality for millions of professionals who rely on WhatsApp to get work done. The chaos she felt is universal. But so is the relief she found.</p>
      
      <p>The transformation from chaos to clarity isn't magic. It's the result of using technology designed for the modern problem of information overload. AI is incredibly good at doing the one thing humans find so difficult: instantly reading huge volumes of text and distinguishing what truly matters.</p>
      
      <p>You don't have to be a tech genius to use it. You just have to be someone who values your time and your focus.</p>
      
      <p>Want to write your own "after" story? It starts with one click. It's time to turn your 500+ unread messages into a 3-bullet summary. Find an AI chat summarizer for WhatsApp Web and experience the transformation for yourself.</p>
    `,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Emma Rodriguez',
    date: '2024-01-05',
    readTime: '4 min read',
    category: 'Case Study',
    gradient: 'from-green-500 to-emerald-500',
    views: '3.1k'
  },
  {
    id: '4',
    title: 'How to Find Anything in Your WhatsApp History (Even When Search Fails)',
    excerpt: 'Stop the endless scrolling. Learn how to ask your chat history questions and get instant answers.',
    content: `
      <p>We've all been there.</p>
      
      <p>You're scrolling frantically through a WhatsApp chat, your thumb aching. You know that message is in here somewhere. It could be a client's address, a password for a shared account, or the link to that important document.</p>
      
      <p>You remember parts of it. You think it was sent "sometime last week."</p>
      
      <p>So, you try the search bar. You type "address." WhatsApp dutifully shows you every single message where the word "address" was ever mentioned, completely out of context. You see messages like, "I'll address that issue later," or "What's the email address for HR?"</p>
      
      <p>None of them are what you're looking for. You try another keyword. Then another. Fifteen minutes later, you're frustrated, no closer to finding what you need, and you end up just asking the person to send it again.</p>
      
      <p>It feels inefficient because it is inefficient. The native search function in WhatsApp wasn't built for the way we actually remember things. It's a keyword finder, not an answer finder.</p>
      
      <h2>Why Your Brain and WhatsApp Search Don't Get Along</h2>
      
      <p>The problem is simple: we think in terms of context, but the search bar thinks in terms of keywords.</p>
      
      <p>When you're trying to recall information, you don't just remember a single word. You remember the situation. You think, "What was the final decision we made about the logo design?" or "Who was assigned to handle the client complaint from last Tuesday?"</p>
      
      <p>If you type "logo" into the search bar, you'll get the entire brainstorming session, the back-and-forth debates, and every opinion shared. You won't get the final answer. You'll have to manually piece the story together yourself.</p>
      
      <p>While the search bar isn't useless, it has clear limitations. But before we talk about a better way, let's make sure you're getting the most out of the tool you already have.</p>
      
      <h2>Getting the Most Out of WhatsApp's Native Search</h2>
      
      <p>There are a few tricks you can use to bend the search bar to your will, at least a little bit.</p>
      
      <ol>
        <li><strong>Search Within a Specific Chat:</strong> Instead of using the main search bar, go into the specific group or individual chat where you think the message is. Tap the name at the top, and then "Search." This at least narrows the haystack before you start looking for the needle.</li>
        <li><strong>Use a Unique Keyword:</strong> Think about the most unusual word in the message you're looking for. Was it a brand name, a project codename, or a specific person's name? Searching for "Project Aquila" will give you far better results than searching for "project."</li>
        <li><strong>Search by Media Type:</strong> If you know you're looking for a document or a link, you can filter your search. In the chat, tap the name, go to "Media, Links, and Docs," and browse through the specific tabs. It's still a manual scroll, but it's a much shorter one.</li>
      </ol>
      
      <p>These tips can help. But they don't solve the core problem. You're still just a keyword detective. What if you could be an interrogator instead? What if you could just ask your chat history a question?</p>
      
      <h2>The Future of Finding: Asking Questions, Not Searching Keywords</h2>
      
      <p>Imagine you could open a panel next to your WhatsApp chats and just type a question in plain English:</p>
      
      <ul>
        <li>"What was the final decision about the Q4 marketing budget?"</li>
        <li>"List all the action items assigned to me from the last 3 days."</li>
        <li>"What was the address for the meeting on Wednesday?"</li>
      </ul>
      
      <p>And in seconds, you get a direct answer. Not a list of 50 messages to read, but the actual answer itself.</p>
      
      <p>This is the power of AI-powered contextual search. New tools, often available as simple Chrome Extensions, are changing the game. They read the chat data securely in your browser and use artificial intelligence to understand the meaning and context behind the words.</p>
      
      <p>They can differentiate between someone brainstorming about a budget and someone stating the final, approved budget. They can identify a sentence as an "action item" and know who it was assigned to.</p>
      
      <p>This approach aligns with how our brains work. We ask questions to get answers. With the right tool, your WhatsApp can finally do the same.</p>
      
      <p>You can stop digging for data and start getting instant intelligence. You transform your chat history from a messy archive into a living database you can talk to.</p>
      
      <p>Stop searching, start asking. The frustration of finding information in WhatsApp is optional. Discover a tool that lets you talk to your chat history and get the answers you need, instantly.</p>
    `,
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'David Kim',
    date: '2023-12-28',
    readTime: '5 min read',
    category: 'Search',
    gradient: 'from-indigo-500 to-purple-500',
    views: '1.5k'
  },
  {
    id: '5',
    title: 'The Project Manager\'s Playbook for Running High-Signal, Low-Noise Groups',
    excerpt: 'Transform WhatsApp from a source of chaos into a powerful project management tool with clear rules and smart automation.',
    content: `
      <p>For a project manager, WhatsApp is a double-edged sword.</p>
      
      <p>On one hand, it's a tool of incredible speed and direct access. You can get real-time updates from your team, make quick decisions, and keep everyone connected, no matter where they are.</p>
      
      <p>On the other hand, it can quickly descend into pure chaos. Important files get buried under memes, critical decisions are lost in a sea of off-topic chatter, and the constant notifications make deep, focused work impossible.</p>
      
      <p>As a PM, your job is to amplify the signal and reduce the noise. If you can master the art of running a WhatsApp group, you can turn it from a source of stress into a powerful project management tool.</p>
      
      <p>This playbook will give you the strategies to create high-signal, low-noise project groups.</p>
      
      <h2>Part 1: Setting the Ground Rules (The Human Element)</h2>
      
      <p>Technology can't solve a people problem. Before you introduce any tool, you need to establish a clear communication culture. At the start of any project, post a "pinned message" with these ground rules.</p>
      
      <ul>
        <li><strong>Rule #1: Use Replies.</strong> This is the single most important rule. Always reply directly to a message to create a thread. This keeps conversations organized and prevents people from talking over each other.</li>
        <li><strong>Rule #2: Acknowledge with Emojis, Not Words.</strong> Instead of ten people replying "Okay" or "Got it," establish an official "acknowledged" emoji (like 👍 or ✔️). This cuts down on notification spam dramatically.</li>
        <li><strong>Rule #3: Use a "Decision" Marker.</strong> When a final decision is made, preface it with a specific emoji or word, like "📌 DECISION:" or "FINAL:". This makes critical outcomes easy to spot when scrolling.</li>
        <li><strong>Rule #4: Keep Off-Topic Chat Elsewhere.</strong> Create a separate, optional "Watercooler" or "Random" group for jokes, memes, and non-work discussions. Be polite but firm about keeping the main project channel focused.</li>
      </ul>
      
      <p>These rules alone will drastically improve the quality of your group chat. But even with perfect discipline, you, the project manager, are still left with one major task: you have to read everything.</p>
      
      <p>Or do you?</p>
      
      <h2>Part 2: The Secret Weapon (The Technology Element)</h2>
      
      <p>Even the most organized group chat still requires you to manually read through messages to get the daily pulse. This is where a smart tool can become your secret weapon, automating the most time-consuming part of your job.</p>
      
      <p>Imagine having a personal assistant who handles your daily stand-up for you. That's what an AI chat extractor, usually in the form of a Chrome Extension, can do.</p>
      
      <p>Here's how to integrate it into your PM playbook.</p>
      
      <p><strong>1. Automate Your Daily Stand-Up Summary</strong></p>
      
      <p>Your team is already giving updates in the chat throughout the day. Instead of asking everyone to report again in the morning, use a tool to do it for you. At the start of your day, you can run a one-click summary of the last 24 hours. The AI will deliver a neat report showing:</p>
      
      <ul>
        <li><strong>Progress Made:</strong> "The design team completed the first draft of the mockups."</li>
        <li><strong>Blockers & Risks:</strong> "The API integration is blocked pending new credentials."</li>
        <li><strong>Key Discussions:</strong> "A debate was held about the priority of Feature X vs. Feature Y."</li>
      </ul>
      
      <p>This takes 60 seconds and gives you a perfect overview of where everything stands.</p>
      
      <p><strong>2. Track Action Items Effortlessly</strong></p>
      
      <p>Keeping track of "who is doing what" is a core PM function. It's also incredibly tedious to do manually. With an AI tool, you can create a reusable, one-click prompt like:</p>
      
      <p>"List all action items and tasks mentioned in the chat since yesterday. Include who is responsible for each."</p>
      
      <p>Running this prompt daily gives you an instant, automated to-do list for your entire team. You can spot who is overloaded and where things might be falling through the cracks, without ever having to scroll.</p>
      
      <p><strong>3. Find Critical Decisions Instantly</strong></p>
      
      <p>Remember the "Decision Marker" from our ground rules? An AI tool puts that on steroids. Even if your team forgets to use the marker, you can simply ask the tool a direct question:</p>
      
      <p>"What was the final decision on the new software vendor?"</p>
      
      <p>The AI will scan the entire conversation, understand the context, and give you the answer, saving you from having to read a week's worth of debate.</p>
      
      <h2>From Chat Janitor to Strategic PM</h2>
      
      <p>By combining clear ground rules with smart automation, you fundamentally change your role. You stop being a "chat janitor," constantly cleaning up conversations and digging for information.</p>
      
      <p>You become a true strategic leader. Your time is freed up to focus on solving problems, managing stakeholders, and steering the project to success, all with the confidence that you haven't missed a single important detail.</p>
      
      <p>Want to automate your daily stand-up summary? It's time to add the ultimate secret weapon to your playbook. Find a smart WhatsApp Chrome extension and transform your project communication.</p>
    `,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Lisa Park',
    date: '2023-12-20',
    readTime: '6 min read',
    category: 'Project Management',
    gradient: 'from-orange-500 to-red-500',
    views: '2.7k'
  },
  {
    id: '6',
    title: 'Are WhatsApp Plugins & Extensions Safe? A 3-Point Security Checklist',
    excerpt: 'Your WhatsApp contains private conversations and sensitive data. Learn how to choose safe extensions with confidence.',
    content: `
      <p>We all want more from our tools. It's only natural to see a gap in WhatsApp's functionality and go looking for a browser extension or plugin to fill it. Maybe you want to schedule messages, create polls, or summarize your chats.</p>
      
      <p>But a moment of hesitation often follows. You think, "This tool needs to read my WhatsApp. Is that safe? Where is my data going?"</p>
      
      <p>That hesitation is smart. Your WhatsApp contains some of your most private conversations, sensitive work data, and personal information. Giving a third-party tool access to it is a decision that requires careful consideration.</p>
      
      <p>The good news is that not all extensions are created equal. Many are built by responsible developers with a strong commitment to privacy. The trick is knowing how to tell the good ones from the bad ones.</p>
      
      <p>Before you install any WhatsApp extension, run it through this simple 3-point security checklist.</p>
      
      <h2>Checklist Point 1: What is Their Data Retention Policy?</h2>
      
      <p>This is the single most important question you can ask. A "Data Retention Policy" tells you what the company does with your information after they've used it.</p>
      
      <ul>
        <li><strong>The Red Flag:</strong> Vague or non-existent policies. If a company doesn't clearly state what they do with your data, assume the worst: they are storing it, and you don't know for how long or for what purpose. They might be selling it to advertisers or using it to train their own models.</li>
        <li><strong>The Gold Standard:</strong> A "Zero Data Retention" or "No Data Storage" policy. This is a clear promise that your information is never saved on their servers. The tool uses your data for the specific task you requested (like creating a summary) and then immediately discards it. Once your session is over, your data vanishes.</li>
      </ul>
      
      <p>Look for this policy on their website's homepage, privacy page, or FAQ. If you can't find it, stay away.</p>
      
      <h2>Checklist Point 2: Where is Your Data Processed?</h2>
      
      <p>This is a more technical but equally important question. It's about where the work happens.</p>
      
      <ul>
        <li><strong>The Red Flag:</strong> Server-Side Processing. This means your chat data is uploaded from your browser to the company's remote servers to be processed. Even if they promise to delete it later, your private conversations are still traveling across the internet and sitting on someone else's computer, even for a moment. This creates a potential point of failure for security.</li>
        <li><strong>The Gold Standard:</strong> Local, In-Browser Processing. This is the safest method. It means all the work happens directly on your own computer, inside your own browser. Your chat data is never uploaded and never leaves your machine. The extension works within a secure sandbox, isolated from the internet. It's the digital equivalent of hiring an assistant who works in your office and never takes any documents home.</li>
      </ul>
      
      <p>A trustworthy tool will be proud of its local processing architecture and will advertise it as a key security feature.</p>
      
      <h2>Checklist Point 3: What is Their Business Model?</h2>
      
      <p>There's an old saying in tech: "If you're not paying for the product, you are the product." It's crucial to understand how the company behind the extension makes money.</p>
      
      <ul>
        <li><strong>The Red Flag:</strong> It's Free and Unclear. If a powerful tool is completely free and there's no clear explanation of how the company sustains itself (e.g., through a paid "Pro" version, donations, etc.), you have to be suspicious. It's highly likely they are making money from your data in ways they aren't telling you about.</li>
        <li><strong>The Gold Standard:</strong> A Transparent Business Model. A trustworthy company is open about how it makes money. The most common and honest model is "Freemium." They offer a free version with basic features to let you try the product, and a paid "Pro" or "Business" version with advanced features for users who need more power. This shows they are making money from happy customers who choose to upgrade, not by selling user data in the background.</li>
      </ul>
      
      <h2>Making an Empowered Choice</h2>
      
      <p>You shouldn't have to sacrifice your privacy for better functionality. By using this checklist, you can confidently choose tools that respect your data and enhance your productivity.</p>
      
      <p>Don't let the fear of bad actors stop you from using powerful tools. Instead, empower yourself with knowledge. Learn to spot the signs of a secure, trustworthy extension, and you can get the best of both worlds.</p>
      
      <p>Looking for a tool that passes the test with flying colors? See why we built our extension with a privacy-first promise, ticking every box on this security checklist.</p>
    `,
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'James Wilson',
    date: '2023-12-15',
    readTime: '7 min read',
    category: 'Security',
    gradient: 'from-teal-500 to-green-500',
    views: '1.9k'
  },
  {
    id: '7',
    title: 'How Successful Stock Traders Monitor High-Volume Chat Groups for an Edge',
    excerpt: 'Discover how professional traders use AI to extract valuable insights from trading groups without drowning in noise.',
    content: `
      <p>In the world of stock trading, information is power. And these days, a huge amount of that information flies through high-volume WhatsApp and Telegram groups.</p>
      
      <p>These groups are a firehose of data. You'll find breaking news, expert analysis, hot tips, market sentiment, and a whole lot of noise. For the average trader, trying to keep up is impossible. By the time you scroll back to find a tip from two hours ago, the market has already moved. The opportunity is gone.</p>
      
      <p>But successful traders aren't average.</p>
      
      <p>They don't try to drink from the firehose. They've developed systems to extract only the valuable drops of water. They know that missing a single, crucial message can be the difference between a big win and a painful loss.</p>
      
      <p>So how do they do it? They don't have more time than anyone else. They just have a smarter process, often powered by a secret weapon they rarely talk about.</p>
      
      <p>Here's a look inside their system.</p>
      
      <h2>Step 1: They Don't Read, They Query</h2>
      
      <p>The first thing successful traders understand is that reading every message is a losing game. Their goal isn't to be "caught up"; it's to extract actionable intelligence.</p>
      
      <p>Instead of scrolling, they query their chats like a database. They use smart tools—often AI-powered Chrome Extensions that work with WhatsApp Web—to ask specific questions.</p>
      
      <p>A typical trader might scroll for 20 minutes looking for sentiment on a particular stock. A successful trader asks a direct question:</p>
      
      <p>"Summarize all discussions about $TSLA in the last 3 hours."</p>
      
      <p>In seconds, they get a neat summary of the key arguments, price targets, and concerns, while the average trader is still scrolling past memes.</p>
      
      <h2>Step 2: They Track Sentiment, Not Just Mentions</h2>
      
      <p>Keywords are not enough. Knowing that a stock was mentioned 50 times is useless. You need to know how it was mentioned. Was the sentiment bullish or bearish?</p>
      
      <p>This is where AI becomes a game-changer. Sophisticated traders use tools that can analyze the sentiment of conversations. They can run a query like:</p>
      
      <p>"List all stocks mentioned with positive or 'buy' sentiment today."</p>
      
      <p>This instantly filters out all the neutral noise and bearish chatter, handing them a pre-qualified list of potential opportunities. It's like having a team of analysts working for you 24/7, reading every message and flagging only the most promising ones.</p>
      
      <h2>Step 3: They Automate Their Intelligence Gathering</h2>
      
      <p>The most effective traders are masters of efficiency. They know their time is their most valuable asset. They don't want to type the same questions every single day. So they automate them.</p>
      
      <p>They use tools that allow them to save their most important queries as "reusable prompts." They build a personal dashboard with one-click buttons for their daily intel needs. Their dashboard might look like this:</p>
      
      <ul>
        <li><strong>Button 1:</strong> "Today's Trending Tickers"</li>
        <li><strong>Button 2:</strong> "Summary of Crypto News"</li>
        <li><strong>Button 3:</strong> "Mentions of 'Market Correction'"</li>
        <li><strong>Button 4:</strong> "New NFT Project Alerts"</li>
      </ul>
      
      <p>At the start of their day, they don't open their chats and start scrolling. They open their automation dashboard, click these buttons, and in minutes, they have a complete, customized market briefing based on the collective intelligence of their private groups.</p>
      
      <h2>Gaining Your Own Unfair Advantage</h2>
      
      <p>This system may sound complex, but the tools that enable it are surprisingly simple and accessible. The gap between the average trader and the successful one isn't access to money; it's access to—and intelligent use of—information.</p>
      
      <p>By shifting your mindset from "reading everything" to "querying for specifics," you can start to close that gap. By leveraging automation, you can build a system that consistently delivers an informational edge, saving you hours of work and helping you spot opportunities before the crowd does.</p>
      
      <p>The firehose of information in your trading groups will never stop. You can either let it drown you, or you can build a system to capture exactly what you need.</p>
      
      <p>Ready to get your own trading edge? The tools the pros use are more accessible than you think. Discover how you can start querying your chats and automating your intel today.</p>
    `,
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Alex Thompson',
    date: '2023-12-10',
    readTime: '6 min read',
    category: 'Trading',
    gradient: 'from-yellow-500 to-orange-500',
    views: '2.2k'
  }
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const blog = blogPosts.find(post => post.id === id);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleJoinWaitlist = () => {
    setShowModal(true);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitToGoogleSheets = async (email: string) => {
    try {
      const result = await submitEmailToGoogleSheets(email);
      if (result.success) {
        console.log('Email submitted successfully:', email);
        return { success: true };
      } else {
        // Pass the specific error message from Google Sheets
        throw new Error(result.error || 'Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      // Re-throw with the original error message
      throw error;
    }
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setIsSubmitting(true);
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      await submitToGoogleSheets(email);
      setEmail('');
      setShowModal(false);
      setShowThankYou(true);
    } catch (error) {
      // Show the specific error message from Google Sheets
      setEmailError(error instanceof Error ? error.message : 'Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = () => {
    alert('Share functionality disabled');
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <BlogHeader onJoinWaitlist={handleJoinWaitlist} />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg max-w-md mx-auto border">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
              <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <BlogHeader onJoinWaitlist={handleJoinWaitlist} />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#874EFF] transition-colors duration-200 group"
          >
            <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#874EFF]/10 rounded-full flex items-center justify-center transition-colors duration-200">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Back to Articles</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          {/* Category and Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white px-3 py-1 rounded-full text-xs font-semibold">
              <Tag className="h-3 w-3" />
              {blog.category}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{blog.views} views</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Author and Actions */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] w-12 h-12 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{blog.author}</div>
                <div className="text-sm text-gray-500">Author & Expert</div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="mb-12">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div 
              className="blog-content max-w-none text-gray-700 leading-relaxed"
              style={{
                fontSize: '17px',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#874EFF] to-[#C83FFF] rounded-2xl p-8 text-white text-center shadow-xl mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your WhatsApp Experience?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have already discovered the power of organized WhatsApp communication with AI-powered insights.
          </p>
          <button
            onClick={handleJoinWaitlist}
            className="inline-flex items-center px-8 py-3 bg-white text-[#874EFF] rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 Join the Waitlist
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl transform animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">🚀 Join Our Waitlist</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be among the first to experience the future of WhatsApp communication. 
              Get early access and exclusive updates!
            </p>
            <form onSubmit={handleModalSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#874EFF]'
                  }`}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : '🎯 Secure My Spot'}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl transform animate-slide-up">
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You! 🎉</h3>
                <p className="text-gray-600 leading-relaxed">
                  You've successfully joined our waitlist! We'll notify you as soon as we launch.
                </p>
              </div>
              <button
                onClick={() => setShowThankYou(false)}
                className="w-full bg-gradient-to-r from-[#874EFF] to-[#C83FFF] text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .blog-content h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-top: 48px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #f3f4f6;
          position: relative;
          line-height: 1.3;
        }

        .blog-content h2:first-child {
          margin-top: 0;
        }

        .blog-content h2:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #874EFF, #C83FFF);
          border-radius: 2px;
          margin-left: -24px;
        }

        .blog-content p {
          margin-bottom: 24px;
          color: #374151;
          font-size: 17px;
          line-height: 1.8;
        }

        .blog-content p:last-child {
          margin-bottom: 0;
        }

        .blog-content strong {
          font-weight: 600;
          color: #1f2937;
          background-color: #f9fafb;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .blog-content ul, .blog-content ol {
          margin: 32px 0;
          padding-left: 0;
        }

        .blog-content li {
          margin-bottom: 16px;
          padding-left: 32px;
          position: relative;
          color: #374151;
          line-height: 1.75;
        }

        .blog-content ul li:before {
          content: '▸';
          position: absolute;
          left: 0;
          top: 0;
          color: #874EFF;
          font-weight: bold;
          font-size: 18px;
        }

        .blog-content ol {
          counter-reset: item;
        }

        .blog-content ol li {
          counter-increment: item;
        }

        .blog-content ol li:before {
          content: counter(item) '.';
          position: absolute;
          left: 0;
          top: 0;
          color: #874EFF;
          font-weight: bold;
          background: #f3f4f6;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .blog-content ol li {
          padding-left: 40px;
        }

        .blog-content blockquote {
          border-left: 4px solid #874EFF;
          padding-left: 24px;
          margin: 32px 0;
          font-style: italic;
          color: #6b7280;
          background: #f9fafb;
          padding: 24px;
          border-radius: 8px;
        }

        .blog-content a {
          color: #874EFF;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }

        .blog-content a:hover {
          border-bottom-color: #874EFF;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;


