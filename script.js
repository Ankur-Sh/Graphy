// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the dataset (or API)
    const data = [
        {
            year: 2021,
            totalJobs: 100,
            jobTitle: "Data Analyst",
            averageSalary: 120000,
        },
        {
            year: 2021,
            totalJobs: 130,
            jobTitle: "Data Analyst",
            averageSalary: 70000,
        },
        {
            year: 2021,
            totalJobs: 120,
            jobTitle: "Data Analyst",
            averageSalary: 130000,
        },
        {
            year: 2021,
            totalJobs: 110,
            jobTitle: "Data Analyst",
            averageSalary: 110000,
        },
        {
            year: 2021,
            totalJobs: 130,
            jobTitle: "Data Analyst",
            averageSalary: 240000,
        },
        {
            year: 2021,
            totalJobs: 120,
            jobTitle: "Data Analyst",
            averageSalary: 180000,
        },
        {
            year: 2021,
            totalJobs: 160,
            jobTitle: "Data Analyst",
            averageSalary: 202800,
        },
        {
            year: 2022,
            totalJobs: 150,
            jobTitle: "Data Scientist",
            averageSalary: 115000,
        },
        {
            year: 2022,
            totalJobs: 130,
            jobTitle: "Data Scientist",
            averageSalary: 80000,
        },
        {
            year: 2022,
            totalJobs: 140,
            jobTitle: "Data Scientist",
            averageSalary: 45000,
        },
        {
            year: 2022,
            totalJobs: 150,
            jobTitle: "Data Scientist",
            averageSalary: 90000,
        },
        {
            year: 2022,
            totalJobs: 170,
            jobTitle: "Data Scientist",
            averageSalary: 75000,
        },
        {
            year: 2022,
            totalJobs: 190,
            jobTitle: "Data Scientist",
            averageSalary: 112300,
        },
        {
            year: 2022,
            totalJobs: 150,
            jobTitle: "Data Scientist",
            averageSalary: 75100,
        },
        {
            year: 2022,
            totalJobs: 130,
            jobTitle: "Data Analyst",
            averageSalary: 178200,
        },
        {
            year: 2022,
            totalJobs: 130,
            jobTitle: "Data Analyst",
            averageSalary: 87000,
        },
        {
            year: 2023,
            totalJobs: 120,
            jobTitle: "Data Scientist",
            averageSalary: 138000,
        },
        {
            year: 2023,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 72000,
        },
        {
            year: 2023,
            totalJobs: 120,
            jobTitle: "Data Scientist",
            averageSalary: 252000,
        },
        {
            year: 2023,
            totalJobs: 100,
            jobTitle: "Data Analyst",
            averageSalary: 168000,
        },
        {
            year: 2023,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 140000,
        },
        {
            year: 2023,
            totalJobs: 140,
            jobTitle: "ML Engineer",
            averageSalary: 130000,
        },
        {
            year: 2023,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 190000,
        },
        {
            year: 2023,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 100000,
        },
        {
            year: 2023,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 150650,
        },
        {
            year: 2023,
            totalJobs: 150,
            jobTitle: "Data Scientist",
            averageSalary: 106700,
        },
        {
            year: 2023,
            totalJobs: 160,
            jobTitle: "Data Scientist",
            averageSalary: 192300,
        },
        {
            year: 2023,
            totalJobs: 170,
            jobTitle: "Data Scientist",
            averageSalary: 107900,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 115000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 95500,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 195000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 160000,
        },
        {
            year: 2024,
            totalJobs: 170,
            jobTitle: "Data Scientist",
            averageSalary: 257600,
        },
        {
            year: 2024,
            totalJobs: 170,
            jobTitle: "Data Scientist",
            averageSalary: 146000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 90000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 70000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 110000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 70000,
        },
        {
            year: 2024,
            totalJobs: 170,
            jobTitle: "ML Engineer",
            averageSalary: 158200,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 74100,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 231400,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 170955,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 137000,
        },
        {
            year: 2024,
            totalJobs: 190,
            jobTitle: "Data Scientist",
            averageSalary: 60300,
        },
        {
            year: 2024,
            totalJobs: 120,
            jobTitle: "Data Scientist",
            averageSalary: 101098,
        },
        {
            year: 2024,
            totalJobs: 120,
            jobTitle: "Data Scientist",
            averageSalary: 59469,
        },
        {
            year: 2024,
            totalJobs: 130,
            jobTitle: "Data Scientist",
            averageSalary: 166363,
        },
        {
            year: 2024,
            totalJobs: 130,
            jobTitle: "Data Scientist",
            averageSalary: 103977,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 166000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "ML Engineer",
            averageSalary: 104000,
        },
        {
            year: 2024,
            totalJobs: 100,
            jobTitle: "Data Scientist",
            averageSalary: 80000,
        },
        {
            year: 2024,
            totalJobs: 120,
            jobTitle: "Data Analyst",
            averageSalary: 85000,
        },
        // Add more data for other years
    ];
    // Function to populate main table
    function populateMainTable() {
        const tableBody = document.querySelector("#main-table tbody");
        tableBody.innerHTML = "";
        data.forEach((entry) => {
            const row = `<tr data-year="${entry.year}">
                <td>${entry.year}</td>
                <td>${entry.totalJobs}</td>
                <td>${entry.averageSalary}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
    // Function to populate main table
    function populateMainTable() {
        const tableBody = document.querySelector("#main-table tbody");
        tableBody.innerHTML = "";
        data.forEach((entry) => {
            const row = `<tr data-year="${entry.year}">
                <td>${entry.year}</td>
                <td>${entry.totalJobs}</td>
                <td>${entry.averageSalary}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    // Function to create line graph
    function createLineGraph(data) {
        const margin = { top: 20, right: 30, bottom: 30, left: 60 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3
            .select("#line-graph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const x = d3
            .scaleLinear()
            .domain(d3.extent(data, (d) => d.year))
            .range([0, width]);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.totalJobs)])
            .nice()
            .range([height, 0]);

        const line = d3
            .line()
            .x((d) => x(d.year))
            .y((d) => y(d.totalJobs));

        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format("d")));

        svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);
    }

    // Function to populate second table based on selected year
    function populateSecondTable(year) {
        const secondTable = document.querySelector("#second-table");
        secondTable.innerHTML = ""; // Clear previous data

        // Filter the data for the selected year
        const filteredData = data.filter((entry) => entry.year === year);

        // Create an object to store the aggregate job titles and counts
        const aggregateData = {};
        filteredData.forEach((entry) => {
            if (aggregateData.hasOwnProperty(entry.jobTitle)) {
                aggregateData[entry.jobTitle]++;
            } else {
                aggregateData[entry.jobTitle] = 1;
            }
        });

        // Populate the second table with aggregate data
        const tableBody = document.createElement("tbody");
        Object.entries(aggregateData).forEach(([jobTitle, count]) => {
            const row = `<tr>
                <td>${jobTitle}</td>
                <td>${count}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
        secondTable.appendChild(tableBody);
    }

    // Initial population of main table and line graph
    populateMainTable();
    createLineGraph(data); // Pass data to createLineGraph

    // Add click event listener to main table rows
    const mainTableRows = document.querySelectorAll("#main-table tbody tr");
    mainTableRows.forEach((row) => {
        row.addEventListener("click", function () {
            const year = parseInt(this.getAttribute("data-year"));
            populateSecondTable(year);
        });
    });
});
