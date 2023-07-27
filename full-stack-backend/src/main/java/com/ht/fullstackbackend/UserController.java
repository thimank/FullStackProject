package com.ht.fullstackbackend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/EmployeeDatabase/")
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("Employee")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getEmployees() throws UserException{
        return  userService.getAllUser();
    }

    @GetMapping("Employee/{id}")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public User getEmployees(@PathVariable int id) throws UserException{
        return  userService.getUser(id);
    }

    @PostMapping("addEmployee")
    @ResponseStatus(HttpStatus.CREATED)
    public String addEmployee(@RequestBody User user) throws UserException{
        return userService.addUser(user);
    }

    @PutMapping("editEmployee")
    @ResponseStatus(HttpStatus.CREATED)
    public String editEmployee(@RequestBody User user) throws UserException{
        return userService.editUser(user);
    }

    @DeleteMapping("deleteEmployee")
    @ResponseStatus(HttpStatus.OK)
    public String deleteEmployee(@RequestBody User user) throws UserException{
        return userService.deleteUser(user);
    }

    @DeleteMapping("deleteEmployee/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteEmployee(@PathVariable int id) throws UserException{
        return userService.deleteUserById(id);
    }
}
