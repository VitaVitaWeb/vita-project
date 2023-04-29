package com.sejong.vitaweb.web.like;

import com.sejong.vitaweb.service.VitaLikeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VitaLikeController {
    private final VitaLikeService vitaLikeService;

    public VitaLikeController(VitaLikeService vitaLikeService) {
        this.vitaLikeService = vitaLikeService;
    }

    @PostMapping("/api/v1/vitalike")
    public void addVitaLike(@RequestParam String status, @RequestParam String id, @RequestParam int vno) {
        vitaLikeService.addVitaLike(status, id, vno);
    }
}
