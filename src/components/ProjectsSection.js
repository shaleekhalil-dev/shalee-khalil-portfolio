import React from "react";
import { Box, Heading, SimpleGrid, VStack, Container, Text, Badge, HStack, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faShieldHalved, faFilter } from "@fortawesome/free-solid-svg-icons";

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
      link: "https://github.com/shaleekhalil-dev"
    },
    {
      title: "Hybrid Digital Identity",
      description: isAr 
        ? "تطوير المنصة الحالية التي تدمج مخرجات الموارد البشرية وعلم النفس مع تقنيات الـ Full Stack، باستخدام React و Chakra UI."
        : "Developing the current platform that integrates HR and Psychology outputs with Full Stack technologies using React and Chakra UI.",
      tags: ["React", "JavaScript", "Chakra UI", "I18n"],
      features: isAr ? ["هوية هجينة", "تصميم زجاجي", "دعم اللغات"] : ["Hybrid Identity", "Glassmorphism", "Multi-language"],
      link: "https://github.com/shaleekhalil-dev"
    }
  ];

  return (
    <Box as="section" id="projects-section" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Heading as="h2" size="2xl" textAlign="center" mb={4}>
            {isAr ? "المشاريع التقنية والابتكارات" : "Technical Projects & Innovations"}
          </Heading>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            {projects.map((project, index) => (
              <Box key={index} className="glass-card" p={8} display="flex" flexDirection="column">
                <VStack align="start" spacing={4} flex="1">
                  <HStack justifyContent="space-between" w="full">
                    <Heading as="h3" size="lg">{project.title}</Heading>
                    <Link href={project.link} isExternal>
                      <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
                    </Link>
                  </HStack>
                  
                  <HStack spacing={2} flexWrap="wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag} colorScheme="blue" variant="outline" borderRadius="full" px={3}>
                        {tag}
                      </Badge>
                    ))}
                  </HStack>

                  <Text fontSize="md" lineHeight="tall">
                    {project.description}
                  </Text>

                  <VStack align="start" spacing={2} w="full">
                    {project.features.map((feature, i) => (
                      <HStack key={i}>
                        <FontAwesomeIcon icon={i === 0 ? faShieldHalved : (i === 1 ? faFilter : faCode)} size="sm" />
                        <Text fontSize="sm" fontWeight="bold">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>
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