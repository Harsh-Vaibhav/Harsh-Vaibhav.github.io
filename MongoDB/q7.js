db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1, salary:1}}
]) 