package com.ht.fullstackbackend;
import java.util.List;

public interface UserService {
    public User getUser(int id) throws UserException;
    public List<User> getAllUser() throws UserException;
    public String addUser(User user) throws UserException;
    public String editUser(User user) throws UserException;
    public String deleteUserById(int id) throws UserException;
    public String deleteUser(User user) throws UserException;
}
