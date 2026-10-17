import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  HStack, Tag, Button, Link, Icon, Divider, Flex
} from "@chakra-ui/react";
import { 
  FaGithub, FaRocket, FaChartLine, 
  FaExternalLinkAlt, FaArrowRight, FaArrowLeft, 
  FaBrain, FaRobot, FaShoppingBag, FaDatabase, FaFileAlt 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TechProjects = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const ArrowIcon = isAr ? FaArrowLeft : FaArrowRight;

  const projects = [
    {
      title: isAr ? "منصة التحليل الرقمي" : "Digital Analysis Platform",
      description: isAr 
        ? "منصة متطورة لتحليل البيانات الاستراتيجية واستخراج الرؤى الذكية لدعم اتخاذ القرار المؤسسي." 
        : "Advanced digital analysis platform for strategic insights and data-driven decision making.",
      tags: ["Data Analysis", "Vercel", "BI"],
      live: "https://project-11-portfolio.vercel.app/",
      icon: FaDatabase, color: "blue.600"
    },
    {
      title: isAr ? "نموذج التواصل المدعوم بالذكاء الاصطناعي" : "AI-Powered Communication Model",
      description: isAr 
        ? "نموذج متطور يستخدم الرؤية الحاسوبية لتحليل تعبيرات الوجه والانفعالات، مما يسهل التواصل الإنساني المدعوم تقنياً." 
        : "Advanced model using Computer Vision to analyze facial expressions and emotions for tech-enhanced communication.",
      tags: ["AI", "Vision", "React"],
      live: "https://emotion-detector-app-six.vercel.app/",
      icon: FaRobot, color: "purple.500"
    },
    {
      title: isAr ? "منصة أنسنة بيئات العمل (PsyCap)" : "Workforce Humanization (PsyCap)",
      description: isAr 
        ? "نظام شامل مدعوم بقاعدة بيانات على (Render) لإدارة المستخدمين والصلاحيات، مخصص لمسح انطباعات الموظفين وتطوير رأس المال النفسي." 
        : "Integrated system with a Render-hosted DB for user management, designed to analyze employee sentiment and develop PsyCap.",
      tags: ["Full-Stack", "Render DB", "HRM"],
      live: "https://psycap-frontend.vercel.app/",
      icon: FaBrain, color: "pink.500"
    },
    {
      title: isAr ? "متجر لو كوست (LowCost Web)" : "LowCost Web Store",
      description: isAr 
        ? "مشروع تجارة إلكترونية متكامل يتميز بواجهة مستخدم عصرية وسرعة فائقة في الأداء، مصمم لتوفير تجربة تسوق سلسة." 
        : "A complete e-commerce project featuring a modern UI and high performance for a seamless shopping experience.",
      tags: ["E-Commerce", "Vercel", "Frontend"],
      live: "https://lowcost-web.vercel.app/",
      icon: FaShoppingBag, color: "orange.500"
    },
    {
      title: isAr ? "التحليل الاستراتيجي لشركة Tech-Line" : "Tech-Line Strategic Analysis",
      description: isAr 
        ? "دراسة تحليلية باستخدام بايثون لبيانات الموظفين توضح أثر التدريب على الأداء المؤسسي وتحقيق الأهداف الاستراتيجية." 
        : "Analytical study using Python to demonstrate the impact of training on institutional performance and goals.",
      tags: ["Python", "Data Analysis", "Strategy"],
      presentation: "https://drive.google.com/file/d/1xxkr13xeV13uqdBSHONeQ0p5hSAcoAYw/view?usp=sharing",
      icon: FaChartLine, color: "teal.500"
    },
    {
      title: isAr ? "التنبؤ بنجاح هبوط SpaceX Falcon 9" : "SpaceX Falcon 9 Landing Prediction",
      description: isAr 
        ? "مشروع علوم بيانات يستخدم SQL وتعلم الآلي للتنبؤ بنجاح هبوط معززات الصواريخ بدقة تصل إلى 83.3%." 
        : "Data science project using SQL and ML to predict rocket landing success with 83.3% accuracy.",
      tags: ["Python", "ML", "SQL"],
      github: "https://github.com/shaleekhalil-dev/-Data-Collection-API-with-Webscraping",
      icon: FaRocket, color: "blue.500"
    }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <HStack justify="center" spacing={4}>
              <Heading size="2xl" color="brand.900" fontWeight="900">
                {isAr ? "المشاريع التقنية" : "Technical Projects"}
              </Heading>
              <Icon as={ArrowIcon} color="brand.500" boxSize={8} />
            </HStack>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {projects.map((project, index) => (
              <MotionBox 
                key={index} 
                className="glass-card" 
                p={8} 
                bg="whiteAlpha.300" 
                backdropFilter="blur(12px)"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -10, bg: "whiteAlpha.500", boxShadow: "2xl" }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <HStack justify="space-between" mb={6}>
                    <Box p={3.5} bg={`${project.color.split(".")[0]}.100`} borderRadius="2xl" shadow="sm">
                      <Icon as={project.icon} w={8} h={8} color={project.color} />
                    </Box>
                    <Flex wrap="wrap" gap={2} justify="flex-end">
                      {project.tags.map((tag) => (
                        <Tag key={tag} size="sm" variant="solid" colorScheme="blue" borderRadius="full" px={3}>
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                  </HStack>
                  <Heading size="md" color="brand.900" mb={4}>{project.title}</Heading>
                  <Text color="brand.800" fontSize="sm" mb={6} minH="60px" lineHeight="tall">
                    {project.description}
                  </Text>
                </Box>

                <Box>
                  <Divider mb={5} borderColor="brand.200" opacity={0.6} />
                  <HStack spacing={4}>
                    {project.github && (
                      <Button 
                        as={Link} 
                        href={project.github} 
                        isExternal 
                        size="sm" 
                        colorScheme="gray" 
                        leftIcon={<FaGithub />}
                        borderRadius="lg"
                        _hover={{ textDecoration: "none", transform: "translateY(-2px)" }}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.live && (
                      <Button 
                        as={Link} 
                        href={project.live} 
                        isExternal 
                        size="sm" 
                        colorScheme="blue" 
                        leftIcon={<FaExternalLinkAlt />}
                        borderRadius="lg"
                        _hover={{ textDecoration: "none", transform: "translateY(-2px)" }}
                      >
                        {isAr ? "معاينة حية" : "Live Demo"}
                      </Button>
                    )}
                    {project.presentation && (
                      <Button 
                        as={Link} 
                        href={project.presentation} 
                        isExternal 
                        size="sm" 
                        variant="outline" 
                        colorScheme="teal" 
                        leftIcon={<FaFileAlt />}
                        borderRadius="lg"
                        _hover={{ textDecoration: "none", bg: "teal.50", transform: "translateY(-2px)" }}
                      >
                        {isAr ? "التقرير التحليلي" : "Analytical Report"}
                      </Button>
                    )}
                  </HStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TechProjects;