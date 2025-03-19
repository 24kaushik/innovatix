import { useState } from "react";
import { useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { ProjectsList } from "./Projects";

import { IoPersonCircle } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { FaShareFromSquare } from "react-icons/fa6";

interface innovationType {
  title: string;
  description: string;
}

const Innovation = () => {
  const InnovationId = useParams().id;
  const [selection, setSelection] = useState(1);

  const innovation: innovationType = {
    title: "AI-Powered Code Debugging Assistant",
    description: `Description:  
Software development often involves time-consuming debugging processes that slow down productivity. The AI-Powered Code Debugging Assistant is an intelligent tool designed to help developers identify, understand, and resolve bugs in their code efficiently. By integrating with popular code editors and IDEs, the assistant provides real-time error detection, suggests potential fixes, and explains the reasoning behind errors.  

How It Works:  
The debugging assistant continuously analyzes the code as it is being written. It detects syntax errors, logical mistakes, and potential performance bottlenecks. When an error is found, the AI engine suggests possible corrections, similar to how Grammarly helps with grammar but for coding. Instead of just highlighting issues, the assistant provides explanations, helping developers understand why the issue occurred and how to prevent it in the future.  

Beyond debugging, the assistant can generate automated test cases to validate the suggested fixes. This ensures that resolving one issue doesn't introduce new ones, making the debugging process more reliable. The AI system learns from previous interactions and adapts to a developer's coding style over time, improving the accuracy of its recommendations.  

Potential Uses:  
- For Beginners: New developers often struggle with understanding errors. The assistant serves as a mentor, explaining mistakes in simple terms and offering best practices.  
- For Professional Developers: It helps teams working on large-scale applications by catching hard-to-detect logical errors and providing optimization suggestions.  
- For Open-Source Contributions: Developers contributing to open-source projects can benefit from automated debugging, making their contributions cleaner and more efficient.  
- For Code Review & Optimization: The assistant can be used in code reviews, pointing out redundant or inefficient code and suggesting improvements.  

Technologies That May Be Used:  
- Machine Learning & AI: Models like GPT or Codex to analyze and understand code patterns.  
- Static Code Analysis: Tools like ESLint, Pylint, or SonarQube for detecting common code issues.  
- Natural Language Processing: For generating explanations in human-readable form.  
- IDE Plugins: Extensions for VS Code, IntelliJ, and other popular editors.  
- Cloud-Based Services: For real-time processing and learning from debugging history.  

Complexity: 4/5  
Feasibility: 4/5  
Tags: AI, Debugging, Code Review, Automation, Software Development  
`,
  };

  const tabVariants = {
    inactive: { opacity: 0.6 },
    active: { opacity: 1 },
  };

  return (
    <BlackSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 max-w-7xl mx-auto"
      >
        <motion.div
          className="flex items-center px-5 md:px-10"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <IoPersonCircle size={50} className="text-gray-100 mr-3" />
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-semibold text-gray-100"
            >
              Full Name
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base text-gray-300"
            >
              @username
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="py-5 px-5 md:px-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h1
            className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {innovation.title}
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex justify-around py-5 px-5 md:px-10 border-b border-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { name: "Details", value: 1 },
            { name: "Projects", value: 2 },
            { name: "Comments", value: 3 },
          ].map((tab) => (
            <motion.div
              key={tab.value}
              variants={tabVariants}
              initial="inactive"
              animate={selection === tab.value ? "active" : "inactive"}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <Button
                variant="ghost"
                className="w-32 text-lg font-medium text-center rounded-none hover:bg-transparent"
                onClick={() => setSelection(tab.value)}
              >
                {tab.name}
              </Button>
              {selection === tab.value && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="py-3"
          >
            {selection === 1 && <Details innovation={innovation} />}
            {selection === 2 && <Projects />}
            {selection === 3 && <Comments />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </BlackSpotlight>
  );
};

const Details = ({ innovation }: { innovation: innovationType }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-gray-100 whitespace-pre-line text-lg px-5 md:px-10 prose prose-invert max-w-none"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p
          className="px-3 md:px-5 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {innovation.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsList />
    </motion.div>
  );
};

const Comments = () => {
  const comments = [
    {
      name: "John Doe",
      username: "@johndoe",
      comment: "This innovation could revolutionize how we debug code!",
    },
    {
      name: "Jane Smith",
      username: "@janesmith",
      comment: "I'd love to see this integrated with VS Code.",
    },
    {
      name: "Alex Johnson",
      username: "@alexj",
      comment: "Have you considered how this would handle compiled languages?",
    },
  ];

  return (
    <motion.div
      className="px-5 md:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        className="flex mt-2 mb-5"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Textarea
          placeholder="Add a comment"
          className="bg-muted min-h-0 focus:ring-1 focus:ring-blue-400"
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Comment
          </Button>
        </motion.div>
      </motion.form>

      <motion.p
        className="text-xl font-semibold my-6 text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Comments
      </motion.p>

      <div>
        {comments.map((comment, i) => (
          <motion.div
            className="border-l-4 border-blue-500 p-4 my-6 bg-muted/30 backdrop-blur-sm rounded-lg shadow-lg"
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * i + 0.4 }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IoPersonCircle size={40} className="text-gray-100 mr-3" />
              </motion.div>
              <div>
                <p className="text-base font-medium text-gray-100">
                  {comment.name}
                </p>
                <p className="text-sm text-gray-400">{comment.username}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-gray-100 text-lg py-2">{comment.comment}</p>
            </div>
            <div className="flex space-x-4 mt-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400"
                >
                  <span>Like</span>
                  <FaRegThumbsUp size={18} />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400"
                >
                  <span>Reply</span>
                  <MdOutlineInsertComment size={18} />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400"
                >
                  <span>Share</span>
                  <FaShareFromSquare size={18} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Innovation;
