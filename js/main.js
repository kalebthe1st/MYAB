(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    animateOut: "fadeOutLeft",
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  $(document).ready(function () {
    // Initialize Owl Carousel
    $(".header-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 800,
    });

    // Content mapping for each slide
    const teamContentMap = {
      1: `
        <h1 class="display-4 text-white mb-5">Yemesrach Belay Belete</h1>
          <p class="text-white">
            is a founding partner, licensed attorney, legal consultant, and
            lecturer with extensive experience in environmental law, research,
            and advocacy. She holds an LL.B (2017) and an LL.M in Natural
            Resource Governance (2019) from Ethiopia. Since 2017, Yemesrach has
            been a lecturer at Mekelle University and has served as Acting
            Director of its Environment and Natural Resources Law Center
            (MU-ENRLC) since 2022. Currently, Yemesrach serves as a Lecturer of
            Law and the Department Head at the Department of Law within the
            Resource Management College of the Ethiopian Defense University. She
            has coordinated community research projects funded by institutions
            such as Tilburg University and the American Embassy, published
            research, and provided consultancy on environmental impact
            assessments, audits, and feasibility studies.
          </p>
          <p class="text-white mb-4">
            In addition, she has coached moot court teams, advised on law and
            policy development, and contributed to public interest litigation
            and legal aid for marginalized communities. As a Project Coordinator
            at Eco-Justice Ethiopia, Yemesrach has advanced the organization’s
            mission by leading initiatives on climate change adaptation,
            mitigation, and policy advocacy, aligning with the UN's zero waste
            goals. She has overseen projects that empower vulnerable
            communities, promote sustainable practices, and advocate for
            environmental justice through partnerships, community engagement and
            public interest litigations. She has significant experience in
            research studies, awareness campaigns, and collaboration with
            national and international entities.
          </p>
          <p class="text-white mb-4">
            She has leveraged legal frameworks to address ecological harm and
            promote solutions like plastic reduction and zero-waste initiatives.
            Her areas of expertise include energy and mining laws, as well as
            environment and natural resource governance. Yemesrach is a member
            of several professional organizations, including the Ethiopian Women
            Lawyers Association and the Ethiopian Federal Lawyers Association,
            and Eco-Justice Ethiopia. Fluent in Amharic and proficient in
            English, she communicates effectively in diverse professional
            contexts.
          </p>
      `,
      2: `
        <h1 class="display-4 text-white mb-5">Biniam Mekonnen G/Mariam </h1>
          <p class="text-white">
            is a Founding Partner. He holds an LL.B (2008) and an LL.M in Tax and Investment Law (2010) from Ethiopia. With extensive experience as a lecturer, department head, and researcher at institutions like Mekelle, Adigrat, Sheba, and Wollo Universities, he has contributed significantly to academia and community-focused research funded by international organizations such as the Norwegian Embassy and Save the Children. Biniam is a licensed attorney and consultant specializing in tax, investment, and construction law, providing legal advice, mediation, and representation at regional and federal levels.
          </p>
          <p class="text-white mb-4">
            Biniam has served as a researcher at Save the Children International. His professional experience includes conducting in-depth research on gender-based violence and advocating for child protection at Save the Children International. Through this role, he has contributed to raising awareness, influencing policy, and implementing programs designed to safeguard vulnerable populations, particularly women and children. His work reflects a commitment to promoting social justice, ensuring safety, and advancing the rights of marginalized groups.
          </p>
          <p class="text-white mb-4">
            He is currently a Lecturer at Law in Ethiopian Defense University Department of Law. He has also trained judges, prosecutors, and police on refugee protection and legal aid and is a member of the Ethiopian Federal Lawyers Association, Eco-Justice Ethiopia, and the International Federation of Consulting Engineers (FIDIC). Fluent in Amharic & Tigrigna languages and proficient in English, Biniam communicates effectively in diverse professional contexts.
          </p>
      `,
      3: `
      <h1 class="display-4 text-white mb-5">Abraham Hagos G/Yesus</h1>
          <p class="text-white">
            is a Founding Partner. He is a legal expert specializing in trade, investment, and engineering contracts with an LL.B (2008) and LL.M in Commercial and Investment Law (2024) from Ethiopia, alongside a diploma in ADR (2023). With over a decade of experience, he has served as a Senior Legal Advisor for the Chemical Industry Corporation and consulted on international contracts, arbitration, and construction law. His expertise includes drafting and negotiating agreements for infrastructure projects, foreign direct investment, tax consulting, and regulatory compliance.
          </p>
          <p class="text-white mb-4">
            Abraham is an experienced legal professional specializing in assisting both foreign and national investments. His expertise spans the entire investment process, from obtaining investment licenses to preparing comprehensive project feasibility studies and conducting Environmental Impact Assessments (EIAs). He ensures seamless facilitation of the investment procedures, providing end-to-end support through the team of associates to help clients establish and sustain successful ventures. Also He is currently a Lecturer at Law in Ethiopian Defense University Department of Law.
          </p>
          <p class="text-white mb-4">
            He is a licensed attorney and consultant specializing in tax, investment, and construction law, unfair law, providing legal advice, mediation, and representation at regional and federal levels. Abraham has participated in prestigious fellowships and trainings, including the Hague Academy of International Law and the 33rd International Training in Legislative Drafting in India. He is a member of renowned organizations such as the International Court of Arbitration and FIDIC. Fluent in Amharic & Tigrigna languages and proficient in English, Abraham communicates effectively in diverse professional contexts. 
          </p>
      `,
      4: `
      <h1 class="display-4 text-white mb-5">Mesele Abune Shitaye </h1>
          <p class="text-white">
is a Founding Partner. He is highly experienced legal professional with over two decades of expertise spanning judiciary roles, legal consultancy, and advisory services. He holds an LL.B in Law and an LL.M in Commercial and Investment Law, demonstrating a strong academic foundation and specialized legal knowledge. Mesele’s career began as a First Instance Court Judge, where he presided over diverse legal matters, gaining deep insight into the judicial system.           </p>
          <p class="text-white mb-4">
Transitioning to advisory roles, he served as a Higher Legal Expert at the Ethiopian National Archives and Library Agency and later as a Legal Adviser and Unit Leader at Bebeka Coffee Estate Share Company. Since 2017, he has been a licensed attorney and consultant, providing tailored legal solutions to clients. He has complemented his professional experience with various certifications and trainings, including managerial skills, process reengineering (BPR and BSC), and computer science, showcasing his commitment to continuous learning and adaptability.          </p>
          <p class="text-white mb-4">
Fluent in Amharic and proficient in English, Mesele communicates effectively in diverse professional contexts. Recognized for his honesty, reliability, and conflict-resolution skills, Mesele is deeply committed to promoting justice and development. His passion for achieving goals, coupled with a visionary mindset, underpins his dedication to delivering impactful legal services.           </p>
      `,
      // Add more entries as needed for each slide
    };

    // Listen for carousel changes
    $(".header-carousel").on("changed.owl.carousel", function (event) {
      // Get the index of the current item
      const currentIndex = event.item.index; // This includes clones
      const realIndex = $(event.target)
        .find(".owl-item")
        .eq(currentIndex)
        .find(".owl-carousel-item")
        .data("content");

      // Update the .team-content dynamically
      if (realIndex && teamContentMap[realIndex]) {
        $(".team-content").html(teamContentMap[realIndex]);
      }
    });
  });
})(jQuery);

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     { pageLanguage: "am" },
//     "google_translate_element"
//   );
// }
