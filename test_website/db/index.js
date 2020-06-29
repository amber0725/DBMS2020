//queries work in database
const pg = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',
    password: '19941130',
    database: 'fitness',
    port: 5432,
    ssl: true
};

const Pool = new pg.Pool(config);

const checkMember = (req, res) =>{
    const userAccount = req.params.account;
    const userPassword = req.params.password;
    const query = `SELECT exists (SELECT 1 FROM logindata 
                    WHERE  person_id = ${userAccount} and pword = ${userPassword} LIMIT 1);`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result.rows)
    })
};

const clientRecord = (req, res) =>{
    //gymID
    const id = req.params.gymId;
    const query = `SELECT training_part, 
                    ROUND(AVG(reps)::numeric,0), 
                    ROUND(AVG(sets)::numeric,0), 
                    ROUND(AVG(weight)::numeric,0),  
                    ROUND(SUM(reps)::numeric,0), 
                    ROUND(SUM(sets)::numeric,0), 
                    ROUND(SUM(weight)::numeric,0),  
                    Count(training_part)
                    FROM train
                    WHERE training_place = ${id}
                    GROUP BY training_part`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result.rows)
    })
};

const trainingRecord = (req, res) =>{
    const userAccount = req.params.userAccount;
    const query = `SELECT date, training_part, reps, sets, weight
                    FROM train
                    WHERE person_id = ${userAccount}
                    ORDER BY date ASC`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.json(result.rows)
    })
};

const bodyRecord = (req, res) =>{
    const userAccount = req.params.userAccount;
    const query = `SELECT date, weight, body_fat_rate
                    FROM body_composition
                    WHERE person_id = ${userAccount}
                    ORDER BY date ASC`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.json(result.rows)
    })
};

const dietRecord = (req, res) =>{
    const userAccount = req.params.userAccount;
    const query = `SELECT date, no_of_meal, protein, carbon_hydrate, fat
                    FROM meals
                    WHERE person_id = ${userAccount}
                    ORDER BY date ASC`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.json(result.rows)
    })
};

const update = (req, res) =>{
    const account = req.params.userAccount;
    const memberAddr = req.params.updateMemberAddr;
    const memberSex = req.params.updateMemberSex;
    const query = `UPDATE member
                    SET age = ${memberSex}, address = ${memberAddr}
                    WHERE member_id = ${account};`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(200).send(`${account} update success!`)
    })
};
const memberRecord = (req, res) =>{
    const userAccount = req.params.userAccount;
    const query = `SELECT member_id, age, gender, address
                    FROM member
                    WHERE member_id = ${userAccount}`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.json(result.rows)
    })
};

const updateHealth = (req, res) =>{
    const account = req.params.userAccount;
    const chronicDisease = req.params.updateChronicDisease;
    const bloodSugar = req.params.updateBloodSugar;
    const lipid = req.params.updateLipid;
    const bloodPressure = req.params.updateBloodPressure;
    const query = `UPDATE health
                    SET chronic_disease = ${chronicDisease} ,
                        blood_sugar = ${bloodSugar}, 
                        lipid = ${lipid}, 
                        blood_pressure = ${bloodPressure}
                    WHERE member_id = ${account};`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(200).send(`${account} update success!`)
    })
};

const healthRecord = (req, res) =>{
    const userAccount = req.params.userAccount;
    const query = `SELECT chronic_disease, blood_sugar, lipid, blood_pressure
                    FROM health
                    WHERE member_id = ${userAccount}`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.json(result.rows)
    })
};
const createMember = (req, res) =>{
    const id = req.params.inputMemberId;
    const age = req.params.inputMemberAge;
    const sex = req.params.inputMemberSex;
    const addr = req.params.inputMemberAddr;
    const d = new Date();
    const query = `INSERT INTO member (member_id, address, gender, age, entered_day)
                    VALUES (${id}, ${addr},${sex},${age},${d.getFullYear()+'/'+d.getMonth()+'/'+d.getDay()});`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(201).send(`Member ${id} Create SUCCESS!`)
    })
};

const createGym = (req, res) =>{
    const no = req.params.inputGymNo;
    const name = req.params.inputGymName;
    const addr = req.params.inputGymAddress;
    const price = req.params.inputGymPrice;
    const password = req.params.inputGymPassword;
    const query = `INSERT INTO training_place (tp_no., address, name, price, pword)
                    VALUES (${no}, ${addr}, ${name}, ${price}, ${password});`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(201).send(`Gym Register SUCCESS!`)
    })
};

const addTrainingRecord = (req, res) =>{
    const account = req.params.userAccount;
    const date = req.params.trainingDate;
    const sets = req.params.trainingSets;
    const reps = req.params.trainingReps;
    const weight = req.params.TrainingWeight;
    const part = req.params.trainingPart;
    const query = `INSERT INTO train (date, training_part, reps, sets, weight, person_id)
                    VALUES (${date},${part},${reps},${sets},${weight}, ${account});`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(201).send('Training Record added.')
    })
};

const addBodyRecord = (req, res) => {
    const account = req.params.userAccount;
    const date = req.params.bodyDate;
    const weight = req.params.bodyWeight;
    const bfr = req.params.bodyBFR;
    const query = `INSERT INTO body_composition (date, weight, body_fat_rate, person_id)
                    VALUES (${date}, ${weight}, ${bfr}, ${account});`;
    Pool.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(201).send('Body Record added.')
    })
};


const addDietRecord = (req, res) =>{
    const account = req.params.userAccount;
    const date = req.params.dietDate;
    const meal = req.params.dietMeal;
    const fat = req.params.dietFat;
    const ch = req.params.dietCH;
    const protein = req.params.dietProtein;
    const query = `INSERT INTO meals (date, no_of_meal, fat, carbon_hydrate, protein, person_id)
                    VALUES (${date}, ${meal}, ${fat}, ${ch}, ${protein}, ${account});`;
    Pool.query(query,(err, result)=>{
        if(err){
            throw err;
        }
        res.status(201).send('Diet Record added.')
    })
};

const count = 13;