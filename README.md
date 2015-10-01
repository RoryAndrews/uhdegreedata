# UH DEGREE DATA

# OVERVIEW

Contains 7 different functions that perform analytics on [UH data](https://data.hawaii.gov/Formal-Education/University-Of-Hawaii-Degrees-Awarded-By-Major-CIP-/7bfs-svqv) such as amount of degrees or which campuses awarded degrees.

# INSTALLATION

Use the following scripts in your html file:
```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/uhdata.js"></script>
<script src="uhdatafunctions.js"></script>
```

# USAGE

```
<script>
 console.log("Total Degrees", totalDegrees(uhdata));
 console.log("Percentage Hawaiian", percentageHawaiian(uhdata));
 console.log("Total Degrees By Year", totalDegreesByYear(uhdata, 2012));
 console.log("List Campuses", listCampuses(uhdata));
 console.log("List Campus Degrees", listCampusDegrees(uhdata));
 console.log("Max Degrees", maxDegrees(uhdata));
 console.log("Doctoral Degree Programs", doctoralDegreePrograms(uhdata));
</script>
```

# CREDITS

Uses the [Underscore](underscorejs.org) Library.
