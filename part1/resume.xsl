<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version = "1.1" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

	<xsl:output metho = "html"/>
	<xsl:template match = "/resume"> <!-- match resume element -->

		<html>
			<head>
				<title>COMP466 Assignmnet1 Part1</title>
				<link rel="stylesheet" type="text/css" href="../shared/share.css"></link>
				<link rel="stylesheet" type="text/css" href="part1.css"></link>

			</head>
			<body>
				<header class = "header">My Resume</header>
				<nav class = "sideMenu">
					<ul>
						<li><a href="../tma1.htm">TMA1 Cover Page</a></li>
					</ul>
				</nav>

				<div class = "content">
					<h2>General</h2>
					<div>
						Name: <xsl:value-of select = "general/firstName"/>, <xsl:value-of select = "general/lastName"/>
						<br/>
						DOB: <xsl:value-of select = "general/birth/year"/> - <xsl:value-of select = "general/birth/month"/> - <xsl:value-of select = "general/birth/day"/>
						<br />
						City: <xsl:value-of select = "general/city"/>, <xsl:value-of select = "general/province"/>, <xsl:value-of select = "general/country"/>
					</div>

					<h2>Educational Background</h2>
					<table border = "1" >
						<thead>
							<tr>
								<th>School Name</th>
								<th>Program</th>
								<th>Location</th>
								<th>Begin</th>
								<th>End</th>
							</tr>
						</thead>
						<xsl:for-each select = "educationBackground/education">
							<tr>
								<td><xsl:value-of select = "schoolName"/></td>
								<td><xsl:value-of select = "program"/></td>
								<td><xsl:value-of select = "city"/>, <xsl:value-of select = "province"/>, <xsl:value-of select = "country"/></td>
								<td><xsl:value-of select = "begin/month"/> - <xsl:value-of select = "begin/year"/></td>
								<td><xsl:value-of select = "end/month"/> - <xsl:value-of select = "end/year"/></td>
							</tr>
						</xsl:for-each>
					</table>

					<h2>Work Experience</h2>
					<table border = "1" >
						<thead>
							<tr>
								<th>Company Name</th>
								<th>Position</th>
								<th>Location</th>
								<th>Begin</th>
								<th>End</th>
							</tr>
						</thead>
						<xsl:for-each select = "workExperience/workPlace">
							<tr>
								<td><xsl:value-of select = "companyName"/></td>
								<td><xsl:value-of select = "position"/></td>
								<td><xsl:value-of select = "city"/>, <xsl:value-of select = "province"/>, <xsl:value-of select = "country"/></td>
								<td><xsl:value-of select = "begin/month"/> - <xsl:value-of select = "begin/year"/></td>
								<td><xsl:value-of select = "end/month"/> - <xsl:value-of select = "end/year"/></td>
							</tr>
						</xsl:for-each>
					</table>

					
				</div>

				<div class = "footer">COMP466 Assignmnet1</div>
			</body>

		</html>

	</xsl:template>
</xsl:stylesheet>