import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PiStarFourFill, PiSparkle } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";

const CreateInnovation = () => {
  const [isEnhancing, setIsEnhancing] = useState(false);
  
  const handleEnhance = () => {
    setIsEnhancing(true);
    setTimeout(() => setIsEnhancing(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  return (
    <BlackSpotlight>
      <motion.div 
        className="min-h-96 py-20 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-2">
          <PiSparkle className="text-purple-400 text-3xl" />
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Create Innovation
          </h1>
          <PiSparkle className="text-purple-400 text-3xl" />
        </motion.div>
        
        <motion.p 
          variants={itemVariants}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Transform your ideas into groundbreaking innovations with AI assistance
        </motion.p>
        
        <motion.form 
          variants={itemVariants}
          className="bg-neutral-900/70 backdrop-blur-sm max-w-4xl mx-auto rounded-2xl my-5 p-8 text-xl border border-gray-800 shadow-xl shadow-purple-900/20"
        >
          <motion.div 
            className="my-5"
            variants={itemVariants}
          >
            <p className="text-gray-200 mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
              Innovation Title
            </p>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Input
                type="text"
                className="bg-neutral-800 border-gray-700 text-white placeholder:text-gray-500 text-lg md:text-lg focus:ring-purple-500 focus:border-purple-500 transition-all"
                placeholder="Enter the title of your innovation"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="my-5"
            variants={itemVariants}
          >
            <p className="text-gray-200 mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
              Description
            </p>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Textarea
                className="bg-neutral-800 border-gray-700 text-white placeholder:text-gray-500 h-60 text-lg md:text-lg focus:ring-purple-500 focus:border-purple-500 transition-all"
                placeholder="Describe your idea in details and enhance it with AI"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="w-full my-4 py-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-purple-900/30 group"
              onClick={handleEnhance}
              disabled={isEnhancing}
            >
              <motion.div 
                className="flex items-center justify-center gap-2"
                animate={isEnhancing ? { rotate: 360 } : { rotate: 0 }}
                transition={{ repeat: isEnhancing ? Infinity : 0, duration: 2 }}
              >
                <PiStarFourFill className="text-xl group-hover:rotate-90 transition-all duration-300" /> 
                <span>Enhance With AI</span>
              </motion.div>
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </BlackSpotlight>
  );
};

export default CreateInnovation;
