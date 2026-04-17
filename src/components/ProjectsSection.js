import React from "react";
import { Box, Heading, SimpleGrid, VStack, Container, Text, Badge, HStack, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faShieldHalved, faFilter, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const projects = [
    {
      title: "Little Lemon API",
      description: isAr 
        ? "نظام متكامل لإدارة المطاعم مبني باستخدام Django REST Framework، يتضمن أنظمة صلاحيات متقدّمة (RBAC) لإدارة المجموعات (مديرين، طاقم توصيل) مع ميزات التصفية والترتيب."
        : "A complete restaurant management system built with Django REST Framework, featuring advanced RBAC for groups (Managers, Delivery Crew) with filtering and ordering capabilities.",
      tags: ["Python", "Django", "SQL", "API Design", "Pipenv"],
      features: isAr ? ["صلاحيات RBAC", "بحث وتصفية", "أتمتة إدارية"] : ["RBAC Roles", "Search & Filter", "Admin Automation"],
      link: "https://github.com/shaleekhalil-dev/Little-Lemon-API"
    },
    {
      title: "Hybrid Digital Identity",
      description: isAr 
        ? "تطوير المنصة الحالية التي تدمج مخرجات الموارد البشرية وعلم النفس مع تقنيات الـ Full Stack، باستخدام React و Chakra UI ودمج Google Analytics."
        : "Developing the current platform that integrates HR and Psychology outputs with Full Stack technologies using React, Chakra UI, and GA4 integration.",
      tags: ["React", "JavaScript", "Chakra UI", "GA4", "I18n"],
      features: isAr ? ["هوية هجينة", "تصميم زجاجي", "تحليل بيانات"] : ["Hybrid Identity", "Glassmorphism", "Data Analytics"],
      link: "https://github.com/shaleekhalil-dev/shalee-khalil-portfolio"
    }
  ];

  return (
    <Box as="section" id="projects-section" py={20} minH="100vh" display="flex" alignItems="center">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Heading as="h2" size="2xl" textAlign="center" color="black" fontWeight="900">
            {isAr ? "المشاريع التقنية والابتكارات" : "Technical Projects & Innovations"}
          </Heading>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            {projects.map((project, index) => (
              <Box 
                key={index} 
                className="glass-card" 
                p={8} 
                display="flex" 
                flexDirection="column"
                borderBottom="6px solid #1a365d"
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-10px)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              >
                <VStack align="start" spacing={5} flex="1">
                  <HStack justifyContent="space-between" w="full">
                    <Heading as="h3" size="lg" color="#1a365d">{project.title}</Heading>
                    <HStack spacing={4}>
                      <Link href={project.link} isExternal _hover={{ color: "#2b6cb0" }}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </Link>
                    </HStack>
                  </HStack>
                  
                  <HStack spacing={2} flexWrap="wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag} bg="#1a365d" color="white" borderRadius="full" px={3} py={1}>
                        {tag}
                      </Badge>
                    ))}
                  </HStack>

                  <Text fontSize="md" fontWeight="700" color="black" lineHeight="tall">
                    {project.description}
                  </Text>

                  <VStack align="start" spacing={3} w="full" pt={2}>
                    {project.features.map((feature, i) => (
                      <HStack key={i} spacing={3}>
                        <Box color="#2b6cb0">
                           <FontAwesomeIcon icon={i === 0 ? faShieldHalved : (i === 1 ? faFilter : faCode)} size="sm" />
                        </Box>
                        <Text fontSize="sm" fontWeight="800" color="black">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Link 
                    href={project.link} 
                    isExternal 
                    mt="auto" 
                    pt={4} 
                    fontWeight="900" 
                    color="#1a365d"
                    display="flex"
                    alignItems="center"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {isAr ? "معاينة المستودع" : "View Repository"} 
                    <Box mx={2}><FontAwesomeIcon icon={faExternalLinkAlt} size="xs" /></Box>
                  </Link>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ProjectsSection;